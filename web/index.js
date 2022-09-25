const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('./app/models/db');

var corsOpt = {
    origin: "http://localhost:3031"
};

app.use(cors(corsOpt));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('API TODO LIST');
});

app.get('/create-activites', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS activites(id int AUTO_INCREMENT, email VARCHAR(255), title VARCHAR(255), created_at TIMESTAMPS DEFAULT NULL, updated_at TIMESTAMPS DEFAULT NULL, deleted_at TIMESTAMPS DEFAULT NULL, PRIMARY KEY(id))';
    
    sql.query(sqlQuery, (err) => {
        if (err) throw err;
    
        res.send('Table created!')
    });
});

app.get('/create-todo', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS todo(id int AUTO_INCREMENT, activity_group_id INT(11), title VARCHAR(255), is_active VARCHAR(255), priority VARCHAR(255), created_at TIMESTAMPS DEFAULT NULL, updated_at TIMESTAMPS DEFAULT NULL, deleted_at TIMESTAMPS DEFAULT NULL, PRIMARY KEY(id))';
    
    sql.query(sqlQuery, (err) => {
        if (err) throw err;
    
        res.send('Table created!')
    });
});

require('./app/routes/activity.routes')(app);
require('./app/routes/todo.routes')(app);

require("dotenv").config();

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});