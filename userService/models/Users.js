'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({}) {
    }
  };
  users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    phone:DataTypes.STRING,
    address: DataTypes.STRING,
    //isAdmin: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};