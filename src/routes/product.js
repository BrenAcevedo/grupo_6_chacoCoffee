const {Router} = require('express');
const router = Router();
const {detail, cart, create, edit, list, storage, update, remove, productAll, crear, guardar,editar,actualizar} = require('../controllers/product');
const multer = require('multer');
const folder = require('../middlewares/storage');
const upload = (multer({storage: folder('products')}));
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', list);

router.get('/create', adminMiddleware,create);
router.post('/create', [upload.any()], storage); 
// router.get('/probandodb', crear);
// router.post('/probandodb', [upload.any()],guardar);
// router.get('/probandodb/:id', editar);

// router.put('/probandodb/:id', [upload.any()],actualizar);
router.get('/cart', cart);


router.get('/:id/edit', adminMiddleware,update);

router.get('/:id', detail);



router.put('/:id', [upload.any()],edit); 

router.delete('/:id', adminMiddleware,remove); 


module.exports = router;
