// const http = require('http');

import http from 'http';
// can import { createServer } directly without calling http class

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
