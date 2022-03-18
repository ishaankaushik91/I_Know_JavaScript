// Summation of all primes in matrix (RECURSIVE)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(Summation(0, matrix, 0));

function Summation(index, matrix, sum) {
  if (index < matrix.length) {
    for (let k = 0; k < matrix[index].length; k++) {
      if (PrimeCheck(2, matrix[index][k])) {
        sum += matrix[index][k];
      }
    }
    return Summation(index + 1, matrix, sum);
  }
  return sum;
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
