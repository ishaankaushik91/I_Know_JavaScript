// Getting sum of only prime row i.e index wisw in Matrix (RECURSION)
let Matrix = [
  [10, 22, 11, 23, 91, 11],
  [1, 2, 3, 4, 5, 6],
  [10, 22, 33, 11, 1, 0],
  [91, 23, 1, 3, 1, 1],
  [91, 23, 1, 3, 1, 1],
];

Summation(0, Matrix);

function Summation(index, Matrix) {
  if (index < Matrix.length) {
    let sum = 0;
    if (PrimeCheck(2, index)) {
      for (let i = 0; i < Matrix[index].length; i++) {
        sum += Matrix[index][i];
      }
      console.log(sum);
    }
    return Summation(index + 1, Matrix);
  }
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}
