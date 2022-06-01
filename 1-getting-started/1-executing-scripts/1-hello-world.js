const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

// createServer -> only create not activated

// accept argurment such as what port the server is running and what function server run when activated
server.listen(4242, () => {
  console.log('Server is running...');
});
