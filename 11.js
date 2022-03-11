// Conversion of Geometric Progression's number to Prime (RECURSION)
function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}

function Generate(powerStart, num) {
  if (powerStart <= 30) {
    let bum = num ** powerStart;
    while (PrimeCheck(2, bum) == 0) {
      bum += 1;
    }
    console.log(bum);
    return Generate(powerStart + 1, num);
  }
}

Generate(1, 3);
