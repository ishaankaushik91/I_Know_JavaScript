// Converting all non to forced primes in Array (RECURSION)
let Array = [10, 12, 13, 14, 16, 18, 21, 100];

Convert(0, Array);

function PrimeCheck(start, num) {
  if (start < num) {
    if (num % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, num);
  }
  return 1;
}

function Convert(index, arr) {
  if (index < arr.length) {
    while (PrimeCheck(2, arr[index]) == 0) {
      arr[index] += 1;
    }
    return Convert(index + 1, arr);
  }
  console.log(arr);
}
