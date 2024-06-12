const http = require('http');
const port = 8888;
const app = require('./apps');



const server = http.createServer(app);

server.listen(port, '0.0.0.0');
