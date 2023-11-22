const request = require('request');
const { expect } = require('chai');

describe('API Integration Test Suite', () => {
  const baseUrl = 'http://localhost:7865';

  describe('GET / - Index Page', () => {
    it('should return status code 200', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the message "Welcome to the payment system"', (done) => {
      request.get(baseUrl, (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
