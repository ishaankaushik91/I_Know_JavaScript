// Filling an array with random primes only (LOOP)
let array = new Array(20);
array.fill();
let num = Math.floor(Math.random() * 100000000);

for (let i = 0; i < array.length; i++) {
  while (PrimeCheck(num) == 0) {
    num = Math.floor(Math.random() * 100000000);
  }
  array[i] = num;
  num = 4;
}
console.log(array);

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
