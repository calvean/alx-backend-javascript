const request = require('supertest');
const { expect } = require('chai');

const app = require('./api');

describe('Index page', () => {
  it('returns correct status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).to.equal(200);
  });

  it('returns correct result', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Welcome to the payment system');
  });

  it('handles other routes correctly', async () => {
    const response = await request(app).get('/other');
    expect(response.statusCode).to.equal(404);
    expect(response.text).to.equal('Not Found');
  });
});
