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

  describe('GET /available_payments - Available Payments', () => {
    it('should return status code 200', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the expected payment methods object', (done) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal(expectedPaymentMethods);
        done();
      });
    });
  });

  describe('POST /login - Login', () => {
    it('should return status code 200', (done) => {
      const username = 'Javi';
      const requestBody = { userName: username };
      request.post(
        `${baseUrl}/login`,
        { json: requestBody },
        (error, response) => {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });

    it('should return the expected welcome message', (done) => {
      const username = 'Javi';
      const requestBody = { userName: username };
      request.post(
        `${baseUrl}/login`,
        { json: requestBody },
        (error, response, body) => {
          expect(body).to.equal(`Welcome ${username}`);
          done();
        }
      );
    });
  });
});
