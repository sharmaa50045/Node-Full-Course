const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>Complete Node JS</title></head>');
    res.write('<body>');

    res.write('<h1>Enter Your Details:</h1>');

    // ✅ form tag fixed
    res.write('<form action="/submit-details" method="POST">');

    // ✅ input tag closed properly
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');

    // ✅ radio buttons fixed
    res.write('<label>');
    res.write('<input type="radio" name="gender" value="male"> Male');
    res.write('</label><br>');

    res.write('<label>');
    res.write('<input type="radio" name="gender" value="female"> Female');
    res.write('</label><br><br>');

    res.write('<button type="submit">Submit</button>');

    res.write('</form>');

    res.write('</body>');
    res.write('</html>');

    return res.end();
  }

  // ✅ default response
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Padh le beta Node.js 😄</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
