function calculateNumber(a, b) {
  const roundedA = Math.floor(a);
  const roundedB = Math.floor(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;

