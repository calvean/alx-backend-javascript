const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (method === 'GET' && url === '/students') {
    const database = 'database.csv';

    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error\n');
        return;
      }

      const students = data.trim().split('\n');

      if (students.length === 0) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students\nNo students found\n');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
