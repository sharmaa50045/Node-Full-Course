const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Node JS</title></head>');
    res.write('<body>');
    res.write('<h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');

    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');

    res.write('<label for="female" style="margin-left: 20px;">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.method == 'POST' &&
    req.url.toLowerCase() === '/submit-details') {
    fs.writeFileSync('user-details.txt', 'Prashant jain');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Submission Result</title></head>');
  res.write('<body>');
  res.write('<h1>Form Submitted Successfully!</h1>');
  res.write('<p>Your details have been received.</p>');
  res.write('<a href="/">Go Back</a>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
});

const PORT = 4002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});