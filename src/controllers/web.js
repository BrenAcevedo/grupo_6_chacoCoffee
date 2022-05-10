const {Product, Brand, Category, Image, Weight} = require('../database/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


module.exports = {
    all: async (req,res) => {
        try {

            const products = await Product.findAll({
                include: {all: true},
                limit: 6,
                order: [ [ 'id', 'DESC' ]]
            });

            res.render('index', {
                products: products,
            })

        } catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    search: async (req, res) => {
        try {

            let busqueda = req.query.busqueda;

            const products = await Product.findAll({
                include: {all: true},
                where: {
                    [Op.or]: [
                    {name: {[Op.like]: `%${busqueda}%`}},
                    {description: {[Op.like]: `%${busqueda}%`}},
                    ]                    
                }
            });
          
            res.render('search', {products:products, title: 'Resultados de búsqueda', busqueda:busqueda});

        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    filter: async (req,res) => {
        try {

            let marca = Number(req.query.marca) ? Number(req.query.marca) : [1,2,3];
            let precio = req.query.precio ? req.query.precio : 'ASC';
           
            
            const products = await Product.findAll({
                include: {all: true},
                order: [ [ 'price', `${precio}` ]],
                where: {
                    brand: marca,
                }
            });

            res.render('filter', {
                products: products,
                title: 'Productos filtrados'
            })
           
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

}