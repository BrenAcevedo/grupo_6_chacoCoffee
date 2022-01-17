const {resolve} = require('path');

module.exports = {
    login: (req, res) => res.sendFile(resolve(__dirname, '../views/login.html')),
    register: (req, res) => res.sendFile(resolve(__dirname, '../views/register.html')) 
}