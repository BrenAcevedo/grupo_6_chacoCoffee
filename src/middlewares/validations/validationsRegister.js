const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('name')
        .notEmpty().withMessage('Tienes que escribir un nombre')
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('lastName')
        .notEmpty().withMessage('Tienes que escribir un apellido')
        .isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo electrónico válido'),
    body('password')
        .notEmpty().withMessage('Tienes que escribir una contraseña')
        .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres')
        .isStrongPassword( {minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})
        .withMessage('La contraseña debe tener al menos: una mayúscula, una minúscula, un número y un carácter especial')
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