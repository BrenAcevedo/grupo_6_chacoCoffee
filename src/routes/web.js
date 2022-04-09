const {Router} = require('express');
const router = Router();
const {all} = require('../controllers/web');
const {search} = require('../controllers/product');

router.get('/', all);
router.get('/search', search);

module.exports = router;
