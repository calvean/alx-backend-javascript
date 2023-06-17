const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

app.locals.database = process.argv[2];

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
