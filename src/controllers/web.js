const {all} = require('../models/product');

module.exports = {
    index: (req,res) => res.render('index', {
        productos: all(),
    }),
}