require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//middleware

app.use(express.json());

const port = process.env.PORT || 3000;

const start = () => {
	app.listen(port, console.log(`Server is listening ${port}`));
};

start();
