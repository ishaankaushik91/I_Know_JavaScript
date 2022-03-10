// Summation of all primes in Arithmetic Progression (RECURSION)
function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function Generate(a) {
  if (a <= 1000) {
    if (PrimeCheck(2, a)) {
      return a + Generate(a + 7);
    }
    return Generate(a + 7);
  }
  return 0;
}

console.log(Generate(10));
