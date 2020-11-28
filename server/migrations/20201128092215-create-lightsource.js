'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LIGHTSOURCE', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      roomId: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      relayNb: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      rpiId: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      begin: {
        allowNull:false,
        default: "00:00",
        type: Sequelize.STRING
      },
      end: {
        allowNull:false,
        default: "23:59",
        type: Sequelize.STRING
      },
      func: {
        allowNull:false,
        default: "off",
        type: Sequelize.STRING
      },
      arg: {
        allowNull:false,
        default: "",
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LIGHTSOURCE');
  }
};