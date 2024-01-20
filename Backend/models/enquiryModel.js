// EnquiryModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./registerModel');

const Enquiry = sequelize.define('enquiry', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ddate: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '', // Set a default value
  },
  uid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  lid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  mobileno: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  enquiry: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ipaddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ctime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Set a default value
  },
  branchcode: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '0',
  },
}, {
  tableName: 'enquiry',
  timestamps: false,
  alter: false,
});

module.exports = { Enquiry };
