const sql = require("mssql");

const sqlConfig = {
  user: "nodeJS",
  password: "2214303378",
  database: "practice",
  server: "DESKTOP-IPSCV5H\\SPARTA",
  port: 51773,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 3000,
  },
  options: {
    trustServerCertificate: true, 
  },
};



module.exports = sqlConfig;
