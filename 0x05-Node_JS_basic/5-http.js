const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      const students = await countStudents(DATABASE);
      const response = `This is the list of our students\n${students}`;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(response);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
