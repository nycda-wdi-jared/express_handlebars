'use strict';
module.exports = function(sequelize, DataTypes) {
  var Stat = sequelize.define('Stat', {
    team: DataTypes.STRING,
    ypg: DataTypes.STRING,
    ppg: DataTypes.NUMERIC,
    abbr: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Stat;
};