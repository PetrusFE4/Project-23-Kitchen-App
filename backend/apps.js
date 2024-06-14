const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// const userRoute = require('./routes/user')
const app = express();

const route = require('./routes/web');
const port = process.env.PORT||8888;
app.use(bodyParser.json());
app.use('/', route);
app.use('/uploads', express.static('uploads'));
app.use(
    cors({
        origin: "*"
    })
)

// app.use('/user', userRoute);
module.exports = app;