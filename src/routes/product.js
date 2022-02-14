const {Router} = require('express');
const router = Router();
const {detail, cart, create, edit, list, storage, update, remove} = require('../controllers/product');
const multer = require('multer');
const folder = require('../middlewares/storage');
const upload = (multer({storage: folder('products')}))

router.get('/', list);
router.get('/cart', cart);
router.get('/create', create);
router.get('/:id/edit', update);
router.get('/:id', detail);

router.post('/create', [upload.any()],storage); 

router.put('/:id', [upload.any()],edit); 

router.delete('/:id', remove); 


module.exports = router;
