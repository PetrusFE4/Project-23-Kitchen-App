// const dotenv = require('dotenv')

// const http = require('http');
// const port = process.env.PORT||8888;
// const app = require('./apps.js');
// dotenv.config();




// const server = http.createServer(app);

// server.listen(port, '0.0.0.0');

const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const port = process.env.PORT || 8888;
const app = require('./apps.js');

const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});