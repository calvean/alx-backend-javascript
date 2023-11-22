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
});
