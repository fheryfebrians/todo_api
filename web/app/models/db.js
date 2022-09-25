const mysql = require('mysql');
const dbConfig = require('../../config/db');

const conn = mysql.createConnection({
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.port,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

conn.connect(err => {
    if(err) {
        throw err;
    }
    console.log("Success connected to database");
});

module.exports = conn;