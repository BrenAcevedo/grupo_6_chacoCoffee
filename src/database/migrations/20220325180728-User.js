'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },  
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      }, 
      avatar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      isAdmin: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: false,
      }, 
    });

  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('users');
    
  }
};
