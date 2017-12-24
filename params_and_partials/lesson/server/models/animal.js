'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define('Animal', {
    name: 
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    class:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    description:
      {
        type: DataTypes.TEXT
      }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Animal;
};