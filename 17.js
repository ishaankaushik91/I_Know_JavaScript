// Deletion of all primes from a matrix (RECURSION)
let matrix = [
  [10, 12, 13, 14, 17],
  [20, 23, 24, 28, 37],
  [101, 123, 32, 1, 4],
];

Traversal(0, matrix);

function Deletion(j, array) {
  if (j < array.length) {
    if (PrimeCheck(2, array[j])) {
      array[j] = array[j + 1];
    }
    return Deletion(j + 1, array);
  }
}

function Traversal(i, matrix) {
  if (i < matrix.length) {
    Deletion(0, matrix[i]);
    return Traversal(i + 1, matrix);
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
