const {Router} = require('express');
const router = Router();
const {productDetail,productCart} = require('../controllers/product');

router.get('/product', productDetail);
router.get('/cart', productCart);

module.exports = router;
