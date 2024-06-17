// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors')

// // const userRoute = require('./routes/user')
// const app = express();

// app.use(
//     cors({
//         origin: ["http://localhost:5173"],
//         credentials: true,
//         allowedHeaders: ["Content-Type", "Authorization", "Cookies"],
//       })

// )
// app.use(express.urlencoded({ extended: true }));
// const route = require('./routes/web');
// const port = process.env.PORT||8888;
// app.use(bodyParser.json());
// app.use('/', route);
// app.use('/uploads', express.static('uploads'));

// // app.use('/user', userRoute);
// module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");

const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Cookies"],
  })
);

// Middleware Body Parser
app.use(bodyParser.json());

// Routes
// app.get("/", (req, res) => {
//   res.send("Selamat datang di kitchen app");
// });

// Menggunakan routing dari file web.js di bawah /cek
const route = require("./routes/web");
app.use('/', route);

// Mengakses folder uploads secara statis
app.use("/uploads", express.static("uploads"));

// Load environment configuration
const environment = process.env.NODE_ENV || "development";
const config = require(`./config/config.json`)[environment];

const sequelize = new Sequelize(
  config.DATABASE_URL || {
    dialect: "mysql",
  }
);

module.exports = app;
