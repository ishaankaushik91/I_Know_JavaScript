// Pi of all primes in Array (LOOP)
let Array = [11, 12, 13, 14, 15, 16, 17];

console.log(Pi(Array));

function Pi(Array) {
  let value = 1;
  for (let i = 0; i < Array.length; i++) {
    if (PrimeCheck(Array[i])) {
      value *= Array[i];
    }
  }
  return value;
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
