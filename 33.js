// Filling an array with random primes only (RECURSION)
let array = new Array(20);

Traversal(0, array, Math.floor(Math.random() * 1000));

function Traversal(index, array, num) {
  if (index < array.length) {
    while (PrimeCheck(2, num) == 0) {
      num = Math.floor(Math.random() * 1000);
    }
    array[index] = num;
    num = 4;
    return Traversal(index + 1, array, num);
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
