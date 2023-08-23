const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message when totalAmount is 100 and totalShipping is 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWith('The total is: 120'));
  });

  it('should log the correct message when totalAmount is 10 and totalShipping is 10', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWith('The total is: 20'));
  });
});
