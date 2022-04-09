const {Router} = require('express');
const router = Router();
const {login,register, processRegister, loginProcess, profile, logout, edit, update, remove} = require('../controllers/user');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validationRegister = require('../middlewares/validationsRegister')
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
       
        cb(null, './public/images/avatars');
    },
    filename: (req,file,cb) => {
        
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const uploadFile = multer({ storage });


router.get('/register',  guestMiddleware, register);

router.post('/register', uploadFile.single('avatar') , validationRegister,processRegister);

router.get('/login', guestMiddleware, login);

router.post('/login', loginProcess);

router.get('/profile/', authMiddleware, profile);

router.get('/:id/edit', authMiddleware, update);

router.put('/:id', uploadFile.single('avatar'),edit); 

router.delete('/:id', authMiddleware, remove); 

router.get('/logout/', logout);


module.exports = router;