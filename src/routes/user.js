const {Router} = require('express');
const router = Router();
const {login,register, processRegister, loginProcess, profile, logout, edit, update, remove, deleteUser} = require('../controllers/user');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const authIdMiddleware = require('../middlewares/authIdMiddleware');
const validationRegister = require('../middlewares/validations/validationsRegister');
const validationLogin = require('../middlewares/validations/validationsLogin');
const multer = require('multer');
const folder = require('../middlewares/storageAvatar');
const uploadFile = (multer({storage: folder('avatars')}));


router.get('/register',  guestMiddleware, register);

router.post('/register', uploadFile.single('avatar') , validationRegister,processRegister);

router.get('/login', guestMiddleware, login);

router.post('/login', validationLogin,loginProcess);

router.get('/profile/', authMiddleware, profile);

router.get('/:id/edit', authIdMiddleware, update);

router.put('/:id', uploadFile.single('avatar'), validationRegister,edit); 

router.get('/:id/delete', authIdMiddleware, deleteUser);

router.delete('/:id', authIdMiddleware, remove); 

router.get('/logout/', logout);


module.exports = router;