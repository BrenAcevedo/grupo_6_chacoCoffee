const fs = require('fs');

const User = {
    // Referenciar nuestro archivo
    fileName: './src/data/users.json',
    // Leer nuestro archivo
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    // Generar un ID. Debo traer todos los users y obtener el id del utlimo.
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;  // Esto se genera si no tengo usuarios cargados. El archivo .json debe estar asi: []
    },
    // Obtener todos los usuarios
    findAll: function () {
        return this.getData();
    },
    // Buscar por ID
    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    // Buscar usuario por campo. Funciona pero en  caso de que existan cosas repetidas trae el primero. Puedo usarlo para email.
    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    // Crear un usuario
    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData,  // Más todo lo que viene en userData.
            categoria: "usuario"
        }
        allUsers.push(newUser); // Como esto será un array.
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' ')); // Escribir en el archivo que referencie al principio.
        return newUser;
    },
    // Eliminar
    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' ')); 
        return true;

    }
}

module.exports = User;