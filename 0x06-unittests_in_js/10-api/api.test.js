const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API Integration Test Suite', () => {
  const endpoints = [
    {
      url: '/',
      method: 'GET',
      expectedStatusCode: 200,
      expectedBody: 'Welcome to the payment system',
    },
    {
      url: '/cart/12',
      method: 'GET',
      expectedStatusCode: 200,
      expectedBody: 'Payment methods for cart 12',
    },
    {
      url: '/cart/anything',
      method: 'GET',
      expectedStatusCode: 404,
    },
    {
      url: '/available_payments',
      method: 'GET',
      expectedStatusCode: 200,
      expectedBody: JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      }),
    },
    {
      url: '/login',
      method: 'POST',
      body: { userName: 'Javi' },
      expectedStatusCode: 200,
      expectedBody: 'Welcome Javi',
    },
  ];

  endpoints.forEach(({ url, method, body, expectedStatusCode, expectedBody }) => {
    describe(`${method} ${url}`, () => {
      it(`should return status code ${expectedStatusCode}`, (done) => {
        const call = {
          url: `${baseUrl}${url}`,
          method,
          json: body,
        };
        request(call, (error, response, responseBody) => {
          expect(response.statusCode).to.equal(expectedStatusCode);
          if (expectedBody !== undefined) {
            expect(responseBody).to.deep.equal(expectedBody);
          }
          done();
        });
      });
    });
  });
});
