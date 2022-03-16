// Keep inserting random elements at random index until frequency of a number is prime in array (RECURSION)
let array = [
  1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
];

Frequency(0, array);

function Insertion(index, array, position, number) {
  if (index >= position) {
    array[index + 1] = array[index];
    return Insertion(index - 1, array, position);
  }
  array[position] = number;
}

function Frequency(index, array) {
  if (index < array.length) {
    let frequency = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        frequency++;
      }
    }

    let q = frequency;
    let newElement = Math.floor(Math.random() * 100000);
    while (PrimeCheck(2, q) == 0) {
      Insertion(
        array.length - 1,
        array,
        Math.floor(Math.random() * (array.length - 1)),
        newElement
      );
      q += 1;
    }
    return Frequency(index + 1, array);
  }
  console.log(array);
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
