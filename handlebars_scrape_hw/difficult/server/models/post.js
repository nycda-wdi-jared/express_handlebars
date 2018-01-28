'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stat_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Stats',
        key: 'id'
      },
      field: 'stat_id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Post;
};