// Keep on inserting until frequency becomes prime in array (RECURSION)
let array = [1, 1, 2, 2];

Frequency(0, array);

function Insertion(index, array, position) {
  if (index >= position) {
    array[index + 1] = array[index];
    return Insertion(index - 1, array, position);
  }
}

function Frequency(index, array) {
  if (index < array.length) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        freq++;
      }
    }
    let stop = freq;

    while (PrimeCheck(2, stop) == 0) {
      let randIndex = Math.floor(Math.random() * (array.length - 1));
      let randNum = Math.floor(Math.random() * 10001);
      Insertion(array.length - 1, array, randIndex);
      array[randIndex] = randNum;
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
