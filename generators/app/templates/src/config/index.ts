const config = require("dotenv");
config();

module.exports = {
  PROXY_HOST: process.env.PROXY_HOST,
  API_KEY: process.env.API_KEY
};
