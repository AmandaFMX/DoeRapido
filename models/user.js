'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    User.hasMany(models.Match);
    User.hasMany(models.Photo);
     }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    status: DataTypes.STRING,
    interests: DataTypes.TEXT,
    birthDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};