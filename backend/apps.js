const express = require('express');
const bodyParser = require('body-parser');

// const userRoute = require('./routes/user')
const app = express();

const route = require('./routes/web');
app.use(bodyParser.json());
app.use('/', route);

// app.use('/user', userRoute);
module.exports = app;