const dotenv = require('dotenv')

const http = require('http');
const port = process.env.PORT||8888;
const app = require('./apps.js');

dotenv.config();




const server = http.createServer(app);

server.listen(port, '0.0.0.0');
