const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator'); 
const {User, Image} = require('../database/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


const controller = {
    register: (req,res) => {
        return res.render('users/register');
    },
    processRegister: async (req, res) => {
        try {

            const users = await User.findAll({include: {all: true}});
            const resultValidation = validationResult(req); 

            let userInDB = await User.findOne({
      
                where: {
                  email: req.body.email,
                }
              });

            if (resultValidation.errors.length > 0) {  
                return res.render('users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body, 
                });
            }

            if (userInDB) {
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            }

            let avatar = await Image.create({
                url: req.file.filename
            });

           

            let user = await User.create({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                address: req.body.address,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: avatar.id, 
            });

            
            
     
           res.redirect('users/login');
        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    login: (req,res) => {
        return res.render('users/login');
    },
    loginProcess: async (req, res) => {
        try {

            let userToLogin =  await User.findOne({
      
                where: {
                  email: req.body.email,
                }
              });
            
            
            if (userToLogin) {
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if (isOkThePassword) {
                    delete userToLogin.password; 
                    req.session.userLogged = userToLogin;
    
                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.session.userLogged.email, { maxAge: 60*60*24*365}); 
                    }
    
                    return res.redirect('/');
                }
                return res.render('users/login', {
                    errors: {
                        pass: {
                            msg: 'La contraseña ingresada es incorrecta'
                        }
                    }
                
                })
            }
    
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
                }
            
            })
            
     
        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    profile: (req,res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });
    },
    update: async (req,res) => {

        try {
            
           const user = await User.findByPk(req.params.id, {include: {all: true}} );
          
           res.render('users/edit', {
            user: user,
            title: 'Editar perfil',
            })

        } catch (error) {
            res.status(500).send({message: error.message});
        }

    },
    edit: async (req,res) => {

        try {
            
           let user = await User.findByPk(req.params.id);

           let avatar = await Image.create({
            url: req.file.filename
           });

  
           await user.update({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                address: req.body.address,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: avatar.id, 
           }, {
               where: {
                   id: req.params.id
               }
           });



          res.redirect('users/profile');

        } catch (error) {
            res.status(500).send({message: error.message});
        }

    },
    remove: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id);
            
            await user.destroy()
            req.session.destroy();

            res.redirect('/');
        } catch (error) {
            return res.send(error)
        }
    },
    logout: (req,res) => {
        res.clearCookie('userEmail'); 
        req.session.destroy(); 
        return res.redirect('/');
    },
}

module.exports = controller;
