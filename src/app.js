const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hej det gode hold\n');
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// HTTP req

function makeHttpRequest() {
  const options = {
    hostname: 'api.example.com',
    port: 80,
    path: '/data',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response Data:', JSON.parse(data));
    });
  });

  req.on('error', (error) => {
    console.error('Request Error:', error);
  });

  req.end();
}
