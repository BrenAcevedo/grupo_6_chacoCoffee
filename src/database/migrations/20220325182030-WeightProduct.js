'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('weightsProducts', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      
    });

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('weightsProducts');
  
  }
};
