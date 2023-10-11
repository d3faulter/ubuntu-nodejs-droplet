const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// API Endpoint
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Nicolas' },
    { id: 2, name: 'Victor' },
    { id: 3, name: 'Johnny' }
  ];
  res.json(users);
});

const hostname = '0.0.0.0';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
