// Deletion of all primes from array (LOOP)
let mrPrime = [1, 2, 3, 8, 10, 11, 13, 17, 19, 22, 25];

Deletion(mrPrime);

function Deletion(array) {
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array.length; i++) {
      if (PrimeCheck(array[i])) {
        for (let j = i; j < array.length; j++) {
          array[j] = array[j + 1];
        }
      }
    }
  }
  console.log(array);
}

function PrimeCheck(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
