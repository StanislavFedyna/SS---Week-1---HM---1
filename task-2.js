// Link: https://www.codewars.com/kata/pole-vault-starting-marks

const startingMark = (bodyHeight) => {
  const diff = (10.67 - 9.45) / (1.83 - 1.52);
  return Math.round((10.67 + diff * bodyHeight - diff * 1.83) * 100) / 100;
}

console.log(`optimal starting mark is ${startingMark}`)