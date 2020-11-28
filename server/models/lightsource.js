'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LIGHTSOURCE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LIGHTSOURCE.init({
    name: DataTypes.STRING,
    relayNb: DataTypes.INTEGER,
    rpiId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LIGHTSOURCE',
  });
  return LIGHTSOURCE;
};