// Deletion of all primes from a matrix (LOOP)
let matrix = [
  [10, 12, 13, 14, 17],
  [20, 23, 24, 28, 37],
  [101, 123, 32, 1, 4],
];

Deletion(matrix);

function Deletion(matrix) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (PrimeCheck(2, matrix[i][j])) {
        for (let k = j; k < 5; k++) {
          matrix[i][k] = matrix[i][k + 1];
        }
      }
    }
  }
  console.log(matrix);
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
