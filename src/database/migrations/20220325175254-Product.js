'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      brand: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      variety: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      smell: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      detail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      information: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      packaging: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('products');
    
  }
};
