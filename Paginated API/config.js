require('dotenv').config()
const sqlConfig = {
  user: process.env.USER,
  password: process.env.PASSWORD,
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
