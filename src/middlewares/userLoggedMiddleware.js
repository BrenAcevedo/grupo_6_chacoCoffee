const {User} = require('../database/models');

async function userLoggedMiddleware(req,res,next) {
   
    res.locals.isLogged = false;
    let userFromCookie;
    let emailInCookie = req.cookies.userEmail;
    if (emailInCookie) {
        try {
            userFromCookie = await User.findOne({ 

                where:  { 
                    email: emailInCookie,
                } 
            });
        }catch (error) {
            res.status(500).send({message: error.message});
        }   
    }    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie;        
    }       

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();

}



module.exports = userLoggedMiddleware;