const request = require('request');
const { expect } = require('chai');

describe('API Integration Test Suite', () => {
  const baseUrl = 'http://localhost:7865';

  describe('GET / - Index Page', () => {
    it('should return status code 200', () => {
      return new Promise((resolve, reject) => {
        request.get(baseUrl, (error, response) => {
          if (error) {
            reject(error);
          } else {
            expect(response.statusCode).to.equal(200);
            resolve();
          }
        });
      });
    });

    it('should return the message "Welcome to the payment system"', () => {
      return new Promise((resolve, reject) => {
        request.get(baseUrl, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            expect(body).to.equal('Welcome to the payment system');
            resolve();
          }
        });
      });
    });
  });

  describe('GET /cart/:id - Cart Page', () => {
    it('should return status code 200 when :id is a number', () => {
      const id = 123;
      return new Promise((resolve, reject) => {
        request.get(`${baseUrl}/cart/${id}`, (error, response) => {
          if (error) {
            reject(error);
          } else {
            expect(response.statusCode).to.equal(200);
            resolve();
          }
        });
      });
    });

    it('should return "Payment methods for cart :id" when :id is a number', () => {
      const id = 123;
      return new Promise((resolve, reject) => {
        request.get(`${baseUrl}/cart/${id}`, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            expect(body).to.equal(`Payment methods for cart ${id}`);
            resolve();
          }
        });
      });
    });

    it('should return status code 404 when :id is not a number', () => {
      const id = 'abc';
      return new Promise((resolve, reject) => {
        request.get(`${baseUrl}/cart/${id}`, (error, response) => {
          if (error) {
            reject(error);
          } else {
            expect(response.statusCode).to.equal(404);
            resolve();
          }
        });
      });
    });
  });

  describe('GET /available_payments - Available Payments Endpoint', () => {
    it('should return status code 200', () => {
      return new Promise((resolve, reject) => {
        request.get(`${baseUrl}/available_payments`, (error, response) => {
          if (error) {
            reject(error);
          } else {
            expect(response.statusCode).to.equal(200);
            resolve();
          }
        });
      });
    });

    it('should return an object with the correct structure', () => {
      return new Promise((resolve, reject) => {
        request.get(`${baseUrl}/available_payments`, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            const expected = {
              payment_methods: {
                credit_cards: true,
                paypal: false
              }
            };
            expect(JSON.parse(body)).to.deep.equal(expected);
            resolve();
          }
        });
      });
    });
  });

  describe('POST /login - Login Endpoint', () => {
    it('should return status code 200', () => {
      const username = 'Betty';
      const requestBody = { userName: username };

      return new Promise((resolve, reject) => {
        request.post(
          {
            url: `${baseUrl}/login`,
            json: requestBody
          },
          (error, response) => {
            if (error) {
              reject(error);
            } else {
              expect(response.statusCode).to.equal(200);
              resolve();
            }
          }
        );
      });
    });

    it('should return the message "Welcome :username"', () => {
      const username = 'Betty';
      const requestBody = { userName: username };

      return new Promise((resolve, reject) => {
        request.post(
          {
            url: `${baseUrl}/login`,
            json: requestBody
          },
          (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              expect(body).to.equal(`Welcome ${username}`);
              resolve();
            }
          }
        );
      });
    });
  });
});

