const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// const userRoute = require('./routes/user')
const app = express();

app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "Cookies"],
      })
)
const route = require('./routes/web');
const port = process.env.PORT||8888;
app.use(bodyParser.json());
app.use('/', route);
app.use('/uploads', express.static('uploads'));

// app.use('/user', userRoute);
module.exports = app;