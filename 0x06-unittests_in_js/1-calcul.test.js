const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should round the numbers and return their sum', () => {
      assert.strictEqual(calculateNumber('SUM', 1.0, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.3, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.7, 3), 5);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.5, 3.8), 2);
      assert.strictEqual(calculateNumber('SUM', -1.7, -3.2), -5);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should round the numbers and return their difference', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 2.1), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 8.4), 2);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.6, 3.8), -9);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.7, -3.2), 1);
    });
  });

  describe('type: DIVIDE', () => {
    it('should round the numbers and return their division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
    });

    it('should handle division by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -12, 3), -4);
      assert.strictEqual(calculateNumber('DIVIDE', 9, -2), -4.5);
    });
  });
});
