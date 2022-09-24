const express = require('express');
const cors = require('cors');
const app = express();

var corsOpt = {
    origin: "http://localhost:5050"
};

app.use(cors(corsOpt));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json('API TODO LIST');
});

require('./app/routes/activity.routes')(app);
require('./app/routes/todo.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});