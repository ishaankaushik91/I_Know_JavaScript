// Conversion of Geometric Progression's number to Prime (LOOP)
function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

function Generate(num) {
  for (let power = 1; power <= 30; power++) {
    let bum = num ** power;
    while (PrimeCheck(bum) == 0) {
      bum += 1;
    }
    console.log(bum);
  }
}

Generate(3);
