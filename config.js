// config.js
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`) });

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  DATA_BASE_NAME: process.env.DATA_BASE_NAME || "Hrnet", // Change to your database name
  HOST: process.env.HOST || "localhost",
  MONGODB_PORT: process.env.MONGODB_PORT || 27017, // Change to your MongoDB port if applicable
  PORT: process.env.PORT || 3000, // Change to your Node.js application port
};


