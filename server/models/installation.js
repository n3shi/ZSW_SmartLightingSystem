'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class INSTALLATION extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      INSTALLATION.hasMany(models.ROOM, {foreignKey: 'installationId', as: 'rooms'})
    }
  };
  INSTALLATION.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'INSTALLATION',
  });
  return INSTALLATION;
};