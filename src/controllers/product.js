const {resolve} = require('path');

module.exports = {
    productDetail: (req, res) => res.sendFile(resolve(__dirname, '../views/productDetail.html')),
    productCart: (req, res) => res.sendFile(resolve(__dirname, '../views/productCart.html'))  
}