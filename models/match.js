'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Match.belongsTo(models.User);
      Match.hasMany(models.Photo);

    }
  }
  Match.init({
    userId: DataTypes.INTEGER,
    followingUser: DataTypes.STRING,
    followegUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};