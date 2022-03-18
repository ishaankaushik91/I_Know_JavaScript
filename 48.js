// Pi of all primes in Array (RECURSION)
let Array = [11, 12, 13, 14, 15, 16, 17];

console.log(Pi(0, Array));

function Pi(index, Array) {
  if (index < Array.length) {
    if (PrimeCheck(2, Array[index])) {
      return Array[index] * Pi(index + 1, Array);
    }
    return Pi(index + 1, Array);
  }
  return 1;
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
