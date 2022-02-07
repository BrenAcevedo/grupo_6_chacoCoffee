const {Router} = require('express');
const router = Router();
const {detail, cart, create, edit} = require('../controllers/product');

router.get('/product', detail);
router.get('/cart', cart);
router.get('/create', create);
router.get('/edit', edit);

module.exports = router;
