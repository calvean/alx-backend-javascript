const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round the numbers and return their sum', () => {
    assert.strictEqual(calculateNumber(1.0, 3), 4);
    assert.strictEqual(calculateNumber(1.3, 3), 4);
    assert.strictEqual(calculateNumber(1.7, 3), 5);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-2.5, 3.8), 2);
    assert.strictEqual(calculateNumber(-1.7, -3.2), -5);
  });

  it('should handle decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.1, 2.9), 4);
    assert.strictEqual(calculateNumber(2.4, 4.6), 7);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 5), 5);
    assert.strictEqual(calculateNumber(3, 0), 3);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should use the rounded values of a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.8), 4);
  });

  it('should handle first rounded number', () => {
    assert.strictEqual(calculateNumber(5, 2.5), 8);
    assert.strictEqual(calculateNumber(10, 1.7), 12);
    assert.strictEqual(calculateNumber(20, 0), 20);
  });

  it('should handle second rounded number', () => {
    assert.strictEqual(calculateNumber(2.5, 5), 8);
    assert.strictEqual(calculateNumber(1.7, 10), 12);
    assert.strictEqual(calculateNumber(0, 20), 20);
  });
});

