// Making 5! a prime (LOOP)
let num = Factorial(5);
while (PrimeCheck(num) == 0) {
  num += 1;
}

console.log(num);

function Factorial(number) {
  let pi = 1;
  for (let i = 1; i <= number; i++) {
    pi *= i;
  }
  return pi;
}

function PrimeCheck(number) {
  for (let k = 2; k < number; k++) {
    if (number % k == 0) {
      return 0;
    }
  }
  return 1;
}
