'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ROOM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ROOM.init({
    name: DataTypes.STRING,
    instalationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ROOM',
  });
  return ROOM;
};