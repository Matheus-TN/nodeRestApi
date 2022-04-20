module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "zkoder", // username
    PASSWORD: "123456", // password
    DB: "bezkoder_db", // database name
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };