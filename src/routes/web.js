const {Router} = require('express');
const router = Router();
const {all, search,filter} = require('../controllers/web');

router.get('/', all);
router.get('/search', search);
router.get('/filter', filter);

module.exports = router;
