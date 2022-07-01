require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const info = require('./routes/info');
//middleware

app.use(express.json());

//routes
app.use('/api/v1/info', info);

const port = process.env.PORT || 3000;

const start = () => {
	app.listen(port, console.log(`Server is listening ${port}`));
};

start();
