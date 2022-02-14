const {list,all,match, generate, create, update, trash} = require('../models/product');
const {resolve} = require('express'); 
const req = require('express/lib/request');

module.exports = {
    detail: (req,res) => {
        const {id} = req.params;
        let producto = id ? match('id',id) : null; 
        return producto ? res.render('products/detail',{
            title:'Detalle del producto',
            producto:producto
        }) : res.render('error', {title: 'Error',error: 'No se encontró ningun producto'})
    },
    cart: (req, res) => res.render('products/cart', {
        title: 'Carrito',
    }),
    create: (req, res) => res.render('products/create', {
        title: 'Crear producto',
    }),
    storage: (req,res) => {    
        req.body.files = req.files;
       
        const nuevo = generate(req.body);
        create(nuevo);
        return res.redirect('/products/'+nuevo.id);
    },
    update: (req,res) => {
        const {id} = req.params;
        let producto = id ? match('id',id) : null;

        return producto ? res.render('products/edit',{
            title:'Editar producto',
            producto:producto
        }) : res.render('error', {title: 'Error',error: 'No se encontró ningun producto'})
    },
    edit: (req,res) => {
        req.body.files = req.files;
        update(req.body);
        return res.redirect('/products/'+req.body.id);
    }, 
    list: (req,res) => res.render('products/products', {
        title: 'Listado de Productos',
        productos: all(),
    }),
    remove: (req,res) => {
        trash(req.body.id);
        return res.redirect('/products');
    },
}