const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should round the numbers and return their sum', () => {
      expect(calculateNumber('SUM', 1.0, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.3, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -2.5, 3.8)).to.equal(2);
      expect(calculateNumber('SUM', -1.7, -3.2)).to.equal(-5);
    });
  });

  describe('type: SUBTRACT', () => {
    it('should round the numbers and return their difference', () => {
      expect(calculateNumber('SUBTRACT', 5.7, 2)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 3, 2.1)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 10, 8.4)).to.equal(2);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -4.6, 3.8)).to.equal(-9);
      expect(calculateNumber('SUBTRACT', -1.7, -3.2)).to.equal(1);
    });
  });

  describe('type: DIVIDE', () => {
    it('should round the numbers and return their division', () => {
      expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    });

    it('should handle division by zero', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('DIVIDE', -12, 3)).to.equal(-4);
      expect(calculateNumber('DIVIDE', 9, -2)).to.equal(-4.5);
    });
  });
});
