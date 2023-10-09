const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hej det gode hold\n');
});

// Function to make an internal HTTP request
function makeInternalHttpRequest() {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Internal Response Data:', data);
    });
  });

  req.on('error', (error) => {
    console.error('Internal Request Error:', error);
  });

  req.end();
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // Make an internal HTTP request to the server
  makeInternalHttpRequest();
});
