'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoServicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoServicio.hasMany(models.DatosServicio, {
        foreignKey: 'tipo_servicio'
      })
    }
  }
  TipoServicio.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoServicio',
  });
  return TipoServicio;
};