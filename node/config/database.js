const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "dii-music", // Database name
  "postgres", // Username
  "Suwatida9*", // Password
  {
    host: "localhost", // Connect to your local database
    dialect: "postgres", // Tell sequelize to use Postgres
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("connection successfully");
  } catch (error) {
    console.error("unable to connect", error);
  }
}

async function sync() {
  try {
    await sequelize.sync();
    console.log("connection successfully");
  } catch (error) {
    console.error("unable to connect", error);
  }
}

module.exports = { sequelize, connect, sync };
