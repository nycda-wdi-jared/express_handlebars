'use strict';
module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define('Song', {
    title: 
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    artist:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    lyrics:
      {
        type: DataTypes.TEXT
      }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Song;
};