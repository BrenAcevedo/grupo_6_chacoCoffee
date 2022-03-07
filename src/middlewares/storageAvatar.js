const multer = require('multer');
const path = require('path');


const storageAvatar = multer.diskStorage({
    destination: (req,file,cb) => {
       
        cb(null, './public/images/avatars');
    },
    filename: (req,file,cb) => {
        
        let filename = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

module.exports = storageAvatar;