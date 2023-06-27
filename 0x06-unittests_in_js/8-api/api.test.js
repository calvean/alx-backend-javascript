const assert = require('assert');
const request = require('request');

const { server } = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  before((done) => {
    server.on('listening', done);
  });

  after((done) => {
    server.close(done);
  });

  it('returns correct status code', (done) => {
    request.get(baseUrl, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });

  it('returns correct result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });

  it('handles other routes correctly', (done) => {
    request.get(`${baseUrl}/other`, (error, response) => {
      assert.strictEqual(response.statusCode, 404);
      done();
    });
  });
});
