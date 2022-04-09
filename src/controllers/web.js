const {Product, Brand, Category, Image, Weight} = require('../database/models');

module.exports = {
    all: async (req,res) => {
        try {
            const products = await Product.findAll({include: {all: true}});
            const brand = await Brand.findAll();
            const category = await Category.findAll();
            const weight = await Weight.findAll();
            const image = await Image.findAll({include: {all: true}});

            res.render('index', {
                products: products,
                brand: brand,
                weight:weight,
                category:category,
                image:image,
                })

        } catch (error) {
            res.status(500).send({message: error.message});
        }
    },
}