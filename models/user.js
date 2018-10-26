'use strict';
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, {
      hooks: {
        beforeCreate(user, options) {
          var salt = bcrypt.genSaltSync(10);
          var hash = bcrypt.hashSync(user.password, salt)
          user.password = hash
          user.role = 'traveller'
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post)
  };
  return User;
};