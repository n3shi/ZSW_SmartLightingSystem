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
      ROOM.belongsTo(models.INSTALLATION, {foreignKey: 'installationId', as: 'installation'})
      ROOM.hasMany(models.LIGHTSOURCE, {foreignKey: 'roomId', as: 'lightSources'})
    }
  };
  ROOM.init({
    name: DataTypes.STRING,
    installationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ROOM',
  });
  return ROOM;
};