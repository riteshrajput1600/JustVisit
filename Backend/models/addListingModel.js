const { DataTypes } = require('sequelize');
const { sequelize } = require('./registerModel');

const AddListing = sequelize.define('free_listing', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  DOR: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  cname: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  cperson: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  address: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  phoneno: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  mobileno: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  mobileno_other: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  logo: {
    type: DataTypes.STRING(30), // Match the length with the SQL script
    allowNull: false,
    defaultValue: '',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  subcategory: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '',
  },
  ip_address: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'free_listing',
  timestamps: false,
  alter: false,
});

module.exports = { AddListing };
