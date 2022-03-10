// All primes in Arithmetic Series (RECURSION)
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
      console.log(a);
    }
    return Generate(a + 1);
  }
}

Generate(10);
