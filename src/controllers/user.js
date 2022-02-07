module.exports = {
    login: (req, res) => res.render('users/login', {
        title: 'Ingresar',
    }),
    register: (req, res) => res.render('users/register', {
        title: 'Registrarse',
    }),
}