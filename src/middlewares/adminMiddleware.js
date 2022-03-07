const User = require('../models/User');

function adminMiddleware(req, res, next) {
    if (!req.session.userLogged || req.session.userLogged && res.locals.userLogged.categoria !== 'admin') {          
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;