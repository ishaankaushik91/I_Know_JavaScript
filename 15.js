// Deletion of all primes from array (RECURSION)
let mrPrime = [1, 2, 3, 8, 10, 11, 13, 17, 19, 22, 25];

Traversal(0, mrPrime);

function Deletion(i, array) {
  if (i < array.length) {
    if (PrimeCheck(2, array[i])) {
      for (let j = i; j < array.length; j++) {
        array[j] = array[j + 1];
      }
    }
    return Deletion(i + 1, array);
  }
}

function Traversal(index, array) {
  if (index < array.length) {
    Deletion(0, array);
    return Traversal(index + 1, array);
  }
  console.log(array);
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
