// Making 5! a prime (RECURSION)
let num = Factorial(5);

MakePrime(num);

function MakePrime(number) {
  if (PrimeCheck(2, number) == 0) {
    number += 1;
    return MakePrime(number);
  }
  console.log(number);
}

function Factorial(number) {
  if (number >= 1) {
    return number * Factorial(number - 1);
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
