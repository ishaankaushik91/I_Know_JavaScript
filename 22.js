// Getting sum of only prime row i.e index wisw in Matrix (LOOP)
let Matrix = [
  [10, 22, 11, 23, 91, 11],
  [1, 2, 3, 4, 5, 6],
  [10, 22, 33, 11, 1, 0],
  [91, 23, 1, 3, 1, 1],
  [91, 23, 1, 3, 1, 1],
];

Summation(Matrix);

function Summation(Matrix) {
  for (let k = 0; k < Matrix.length; k++) {
    let sum = 0;
    if (PrimeCheck(k)) {
      for (let o = 0; o < Matrix[k].length; o++) {
        sum += Matrix[k][o];
      }
      console.log(sum);
    }
  }
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
