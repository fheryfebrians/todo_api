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


require('./app/routes/activity.routes')(app);
require('./app/routes/todo.routes')(app);

require("dotenv").config();

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});