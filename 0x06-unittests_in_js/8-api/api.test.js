const assert = require('assert');
const http = require('http');

const { app, server } = require('./api');

const port = 7865;
const baseUrl = `http://localhost:${port}`;

describe('Index page', () => {
  before(() => {
    server.listen(port);
  });

  after(() => {
    server.close();
  });

  it('returns correct status code', (done) => {
    http.get(baseUrl, (res) => {
      assert.strictEqual(res.statusCode, 200);
      done();
    });
  });

  it('returns correct result', (done) => {
    http.get(baseUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Welcome to the payment system');
        done();
      });
    });
  });

  it('handles other routes correctly', (done) => {
    http.get(`${baseUrl}/other`, (res) => {
      assert.strictEqual(res.statusCode, 404);
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Not Found');
        done();
      });
    });
  });
});
