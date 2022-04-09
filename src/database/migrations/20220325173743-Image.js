'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('images', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
    });
     
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('images');
   
  }
};
