// Generating random number until a prime is encountered (RECURSION)
let number = Math.floor(Math.random() * 100000000);

Generation(number);

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function Generation(num) {
  if (PrimeCheck(2, num)) {
    num = Math.floor(Math.random() * 100000000);
    return Generation(num);
  }
  console.log(num);
}
