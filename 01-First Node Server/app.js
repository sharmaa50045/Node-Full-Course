// * const http = require('http');//
// function requestListener(req,res){
//   console.log(req);
// }
// http.createServer(requestListener); *//


// const http = require('http');

// const server = http.createServer((req, res) => {

// });

// const PORT = 3001;
// server.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });


// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req);
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`)
// })


// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(req);
//   process.exit(); // Stops event loop 
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server runnig at http://localhost:${PORT}/`);
// });


// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(res.url, req.method, req.headers);
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  res.write('<html>');
  res.write('<head><title>Complete Node JS</title></head>');
  res.write('<body><h1>padh / le / abhi / bhi / time / hai</h1></body>');
  res.write('</html>');

  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});



