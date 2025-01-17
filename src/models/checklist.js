'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      checklist.belongsToMany(models.DatosServicio, 
        { 
          through: models.ServicioChecklist,
          foreignKey: 'checklistId',
        
      });
    }
  }
  checklist.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'checklist',
  });
  return checklist;
};