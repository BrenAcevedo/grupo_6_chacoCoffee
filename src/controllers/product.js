const {list,all,match, generate, create, update, trash} = require('../models/product');
const {resolve} = require('express'); 
const req = require('express/lib/request');
const {Product, Brand, Category, Image, Weight} = require('../database/models');
const db = require('../database/models');
const { validationResult } = require('express-validator'); 


module.exports = {
    create: async (req, res) => {
        try {
            
           const brand = await Brand.findAll();
           const category = await Category.findAll();
           const weight = await Weight.findAll();
           
           res.render('products/create', {
            brand: brand,
            weight:weight,
            category:category,
            title: 'Crear producto',
            })
            
        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    }, 
    storage: async (req, res) => {
        try {

            const brand = await Brand.findAll();
            const category = await Category.findAll();
            const weight = await Weight.findAll();

            const resultValidation = validationResult(req);

            if (resultValidation.errors.length > 0) {  
                return res.render('products/create', {
                    brand: brand,
                    weight:weight,
                    category:category,
                    title: 'Crear producto',
                    errors: resultValidation.mapped(),
                    oldData: req.body, 
                });
            }

            let image = await Image.create({
                url: req.file.filename
            });

            let product = await Product.create({
                name: req.body.name,
                price: req.body.price,
                brand: req.body.brand,
                description: req.body.description,
                variety: req.body.variety,
                smell: req.body.smell,
                origin: req.body.origin,
                detail: req.body.detail,
                stock: req.body.stock,
                category: req.body.category,
                information: req.body.information,
                packaging: req.body.packaging,
                image: image.id,
            });

            let weights = req.body.weight     
            await product.addWeights(weights);
     
            res.redirect('/products');

        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    update: async (req, res) => {
        try {


            const products = await Product.findAll({include: {all: true}});
            const brand = await Brand.findAll();
            const category = await Category.findAll();
            const weight = await Weight.findAll();
            const image = await Image.findAll();
            const product = await Product.findByPk(req.params.id, {include: {all: true}} );
            
            res.render('products/edit', {
             product:product,
             brand: brand,
             weight:weight,
             category:category,
             image:image,
             title: 'Editar producto',
             })
             
         }
         catch (error) {
             res.status(500).send({message: error.message});
         }
    },
   edit: async (req,res) => {
        try {
 
            const brand = await Brand.findAll();
            const category = await Category.findAll();
            const weight = await Weight.findAll();
            const images = await Image.findAll();
            const product = await Product.findByPk(req.params.id, {include: {all: true}} );


            const resultValidation = validationResult(req);

            if (resultValidation.errors.length > 0) {  
                return res.render('products/edit', {
                    product:product,
                    brand: brand,
                    weight:weight,
                    category:category,
                    images:images,
                    title: 'Editar producto',
                    errors: resultValidation.mapped(),
                    oldData: req.body, 
                });
            }


            let image = await Image.create({
                url: req.file.filename
            });

            
            await product.update({
                name: req.body.name,
                price: req.body.price,
                brand: req.body.brand,
                description: req.body.description,
                variety: req.body.variety,
                smell: req.body.smell,
                origin: req.body.origin,
                detail: req.body.detail,
                stock: req.body.stock,
                category: req.body.category,
                information: req.body.information,
                packaging: req.body.packaging,
                image: image.id,
            }, {
                where: {
                    id: req.params.id
                }
            });

            let weights = req.body.weight     
            await product.addWeights(weights);


            res.redirect('/products/'+req.body.id)

        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    detail: async (req,res) => {
        try {
            const products = await Product.findAll({include: {all: true}});
            const brand = await Brand.findAll();
            const category = await Category.findAll();
            const weight = await Weight.findAll();
            const image = await Image.findAll();
            const product = await Product.findByPk(req.params.id, {include: {all: true}} );
 
           
            
           return product ? res.render('products/detail', {
                product:product,
                brand: brand,
                weight:weight,
                category:category,
                image:image,
                title: 'Detalle del producto',
                }) : res.render('error')

        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    cart: (req, res) => res.render('products/cart', {
        title: 'Carrito',
    }),
    // create: (req, res) => res.render('products/create', {
    //     title: 'Crear producto',
    // }),
    // storage: (req,res) => {    
    //     req.body.files = req.files;
       
    //     const nuevo = generate(req.body);
    //     create(nuevo);
    //     return res.redirect('/products/'+nuevo.id);
    // },
    // update: (req,res) => {
    //     const {id} = req.params;
    //     let producto = id ? match('id',id) : null;

    //     return producto ? res.render('products/edit',{
    //         title:'Editar producto',
    //         producto:producto
    //     }) : res.render('error', {title: 'Error',error: 'No se encontró ningun producto'})
    // },
    // edit: (req,res) => {
    //     req.body.files = req.files;
    //     update(req.body);
    //     return res.redirect('/products/'+req.body.id);
    // }, 
    list: async (req,res) => {
        try {
            const products = await Product.findAll({include: {all: true}});

            res.render('products/products', {
                products: products,
                title: 'Listado de productos',
            })
        } catch (error) {
            return res.send(error)
        }
    },
    remove: async (req,res) => {
        try {
            let product = await Product.findByPk(req.params.id);
            
            await product.destroy()
           
            res.redirect('/products');
        } catch (error) {
            return res.send(error)
        }
    },
}