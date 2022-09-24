const mysql = require('mysql');
const dbConfig = require('../../config/db');

const conn = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

conn.connect(err => {
    if(err) {
        throw err;
    }
    console.log("Success connected to database");
});

module.exports = conn;