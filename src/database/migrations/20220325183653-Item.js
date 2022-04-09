'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('items', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cart: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },  
    });

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('items');
  
  }
};
