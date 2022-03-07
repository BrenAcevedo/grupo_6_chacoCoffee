const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo electrónico válido'),
    body('pass').notEmpty().withMessage('Tienes que escribir una contraseña')
    .custom(async (pass, {req}) => {
        const declaration = req.body.confirContrasena
        if( pass !== declaration){
          throw new Error('Las contraseñas no coinciden. Inténtalo de nuevo.')
        }
      }),
    body('provincia').notEmpty().withMessage('Tienes que elegir una provincia'),
    body('ciudad').notEmpty().withMessage('Tienes que escribir una ciudad'),
    body('domicilio').notEmpty().withMessage('Tienes que escribir un domicilio'),
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