const request = require('request');
const chai = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API Integration Test Suite', () => {
  describe('GET /', () => {
    it('should return status code 200 and correct message', (done) => {
      request.get(baseUrl, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return status code 200 and correct message when :id is a number', (done) => {
      const id = 12;
      request.get(`${baseUrl}/cart/${id}`, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal(`Payment methods for cart ${id}`);
        done();
      });
    });

    it('should return status code 404 when :id is not a number', (done) => {
      const id = 'anything';
      request.get(`${baseUrl}/cart/${id}`, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return status code 200 and correct payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return status code 200 and welcome message with username', (done) => {
      const username = 'Betty';
      request.post(
        {
          url: `${baseUrl}/login`,
          json: { userName: username },
        },
        (error, response, body) => {
          chai.expect(response.statusCode).to.equal(200);
          chai.expect(body).to.equal(`Welcome ${username}`);
          done();
        }
      );
    });
  });
});

