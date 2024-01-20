// AddReviewModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./registerModel');

const AddReview = sequelize.define('rating', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  lid: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  ipaddress: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  ctime: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mobileno: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  city: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  rating: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.BIGINT,
    allowNull: false,
    defaultValue: 1,
  },
  branchcode: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'rating',
  timestamps: false,
  alter: false,
});

module.exports = { AddReview };
