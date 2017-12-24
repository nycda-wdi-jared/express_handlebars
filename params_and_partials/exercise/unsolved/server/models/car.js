'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    make: 
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    model:
      {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Car;
};