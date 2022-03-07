const {Router} = require('express');
const router = Router();
const {detail, cart, create, edit, list, storage, update, remove} = require('../controllers/product');
const multer = require('multer');
const folder = require('../middlewares/storage');
const upload = (multer({storage: folder('products')}));
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', list);
router.get('/cart', cart);
router.get('/create', adminMiddleware,create);
router.get('/:id/edit', adminMiddleware,update);
router.get('/:id', detail);

router.post('/create', [upload.any()],storage); 

router.put('/:id', [upload.any()],edit); 

router.delete('/:id', adminMiddleware,remove); 


module.exports = router;
