const mysql = require('mysql');
const dbConfig = require('../../config/db');

const conn = mysql.createConnection({
    host: dbConfig.MYSQL_HOST,
    user: dbConfig.MYSQL_USER,
    password: dbConfig.MYSQL_PASSWORD,
    database: dbConfig.MYSQL_DBNAME
});

conn.connect(err => {
    if(err) {
        throw err;
    }
    console.log("Success connected to database");
});

module.exports = conn;