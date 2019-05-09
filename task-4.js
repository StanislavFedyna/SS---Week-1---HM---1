// Link: https://www.codewars.com/kata/artificial-rain

const approximationPoint = (value) => {

  return value / (1 + Math.sqrt(1 + value));

}
console.log(approximationPoint(1.7e-15))