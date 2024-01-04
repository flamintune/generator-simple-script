const Axios = require("axios");
const tunnel = require("tunnel");
const { PROXY_HOST } = require("../config/index");

//! for HTTPS over HTTP
const agent = tunnel.httpsOverHttp({
  proxy: {
    host: "localhost",
    port: PROXY_HOST
  }
});
const axios = Axios.create({
  httpsAgent: agent
});

module.exports = { axios };
