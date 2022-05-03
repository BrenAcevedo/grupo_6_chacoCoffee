const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('name')
        .notEmpty().withMessage('Tienes que escribir el nombre del producto').bail()
        .isLength({min: 9}).withMessage('Debes escribir al menos 9 caracteres'),
    body('price')
        .notEmpty().withMessage('Tienes que escribir el precio')
        .isNumeric().withMessage('Debe escribir un numero'),
    body('description')
        .notEmpty().withMessage('Debes escribir una descripción')
        .isLength({min: 30}).withMessage('La descripción debe tener al menos 30 caracteres'),
    body('variety')
        .notEmpty().withMessage('Debes escribir la variedad del producto'),
    body('smell')
        .notEmpty().withMessage('Debes escribir el aspecto olfativo del producto'),
    body('origin')
        .notEmpty().withMessage('Debes escribir el origen del producto'),
    body('detail')
        .notEmpty().withMessage('Debes escribir la reseña del producto'),
    body('brand')
        .notEmpty().withMessage('Debes seleccionar la marca del producto'),
    body('weight')
        .notEmpty().withMessage('Debes seleccionar el peso del producto'),
    body('stock')
        .notEmpty().withMessage('Debes agregar el stock del producto')
        .isNumeric().withMessage('Debes ingresar un número'),
    body('category')
        .notEmpty().withMessage('Debes seleccionar la categoría del producto'),
    body('information')
        .notEmpty().withMessage('Debes agregar la información del producto'),
    body('packaging')
        .notEmpty().withMessage('Debes agregar información del packaging'),
    body('image').custom((value, { req }) => {
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