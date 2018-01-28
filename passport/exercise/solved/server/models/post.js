'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    message: DataTypes.STRING,
    userID: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
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