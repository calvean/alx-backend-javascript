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

  describe('GET /cart/:id - Cart Page', () => {
    it('should return status code 200 when :id is a number', (done) => {
      const id = 123;
      request.get(`${baseUrl}/cart/${id}`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return "Payment methods for cart :id" when :id is a number', (done) => {
      const id = 123;
      request.get(`${baseUrl}/cart/${id}`, (error, response, body) => {
        expect(body).to.equal(`Payment methods for cart ${id}`);
        done();
      });
    });

    it('should return status code 404 when :id is not a number', (done) => {
      const id = 'abc';
      request.get(`${baseUrl}/cart/${id}`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments - Available Payments Endpoint', () => {
    it('should return status code 200', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return an object with the correct structure', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });
  });

  describe('POST /login - Login Endpoint', () => {
    it('should return status code 200', (done) => {
      const username = 'Betty';
      const requestBody = { userName: username };

      request.post(
        {
          url: `${baseUrl}/login`,
          json: requestBody
        },
        (error, response) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });

    it('should return the message "Welcome :username"', (done) => {
      const username = 'Betty';
      const requestBody = { userName: username };

      request.post(
        {
          url: `${baseUrl}/login`,
          json: requestBody
        },
        (error, response, body) => {
          expect(body).to.equal(`Welcome ${username}`);
          done();
        }
      );
    });
  });
});
