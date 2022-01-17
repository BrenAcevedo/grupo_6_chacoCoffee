const {Router} = require('express');
const router = Router();
const web = require('../controllers/web');

router.get('/', web.index);

module.exports = router;
