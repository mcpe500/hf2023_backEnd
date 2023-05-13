const env = require("../config/env.json");
const pgLink = env.pglink;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(pgLink, {
    dialect: 'postgres'
  });

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch((error) => {
    console.error('Unable to connect to the database:', error); 
});

module.exports = sequelize;
