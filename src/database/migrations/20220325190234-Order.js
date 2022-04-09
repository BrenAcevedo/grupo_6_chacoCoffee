'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('orders', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      amount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      }, 
      date: {
        type: Sequelize.TEXT,
        allowNull: false,
      }, 
      user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isActive: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isRecived: {
        type: Sequelize.STRING,
        allowNull: false,
      },    
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('orders');

  }
};
