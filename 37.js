// Making frequency of array elements prime (RECURSION)
let array = [1, 2, 3, 2, 3, 1, 4, 4, 4, 4, 10, 10, 1];

Traversal(0, array);

function MakePrime(number) {
  if (PrimeCheck(2, number) == 0) {
    number += 1;
    return MakePrime(number);
  }
  return number;
}

function Traversal(index, array) {
  if (index < array.length) {
    let frequency = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        frequency++;
      }
    }
    console.log(MakePrime(frequency));
    return Traversal(index + 1, array);
  }
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
