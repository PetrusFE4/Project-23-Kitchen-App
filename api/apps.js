const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const route = require('./routes/web');
app.use(bodyParser.json());
app.use('/', route);

module.exports = app;