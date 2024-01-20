const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("new_schema", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Explicitly drop constraints
User.removeAttribute("unique", "email");

// Use sync with force: false to create the table if it doesn't exist without altering
User.sync({ force: false })
  .then(() => {
    console.log('Table is created if it does not exist.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = { User, sequelize };