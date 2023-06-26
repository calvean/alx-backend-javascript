const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round the numbers and return the sum', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.6, 1), 3);
    assert.strictEqual(calculateNumber(1.5, 4), 6);
    assert.strictEqual(calculateNumber(2, 1.8), 4);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.strictEqual(calculateNumber(-1, 1), 0);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, -1), -2);
    assert.strictEqual(isNaN(calculateNumber(1)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });
});
