const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
      } else if (req.url === '/students') {
        const output = await countStudents('./database.csv');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${output}`);
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
      }
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Method Not Allowed');
    }
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(error.message);
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
