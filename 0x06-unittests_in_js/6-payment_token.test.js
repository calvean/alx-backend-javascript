const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
