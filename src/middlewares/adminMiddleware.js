function adminMiddleware(req, res, next) {
    if (!req.session.userLogged || req.session.userLogged && res.locals.userLogged.isAdmin !== '1') {          
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;