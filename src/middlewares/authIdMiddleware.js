function authIdMiddleware(req, res, next) {
    if (!req.session.userLogged || req.session.userLogged.id != req.params.id) {          
        return res.redirect('/user/login');
    }
    next();
}

module.exports = authIdMiddleware;