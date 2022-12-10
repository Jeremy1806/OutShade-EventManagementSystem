const { Sequelize , DataTypes} = require('sequelize');



  const db = new Sequelize({
    database: "eventmanagement",
    username: "jeremy",
    password: "admin",
    dialect: "postgres",
  });

const User = db.define("user", {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

module.exports = {
  db,
  User
}

