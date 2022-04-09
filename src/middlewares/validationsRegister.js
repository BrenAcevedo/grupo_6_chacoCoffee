const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo electrónico válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
    .custom(async (password, {req}) => {
        const declaration = req.body.confirmPassword
        if( password !== declaration){
          throw new Error('Las contraseñas no coinciden. Inténtalo de nuevo.')
        }
      }),
    body('address').notEmpty().withMessage('Tienes que escribir un domicilio'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file) {
            throw new Error('Tienes que subir una imágen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })
];

module.exports = validations;