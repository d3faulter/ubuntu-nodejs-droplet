const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Define API endpoint to get users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  res.json(users);
});

const hostname = '0.0.0.0';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
