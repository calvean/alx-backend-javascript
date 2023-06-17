const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET') {
    if (url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } else if (url === '/students') {
      countStudents('./database.csv')
        .then(() => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('This is the list of our students\n');

          countStudents('./database.csv')
            .then((data) => {
              res.end(data);
            })
            .catch((error) => {
              res.end(error.message);
            });
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(error.message);
        });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
