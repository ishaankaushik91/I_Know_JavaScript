// Keep on inserting until frequency becomes prime in array (LOOP)
let array = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

Frequency(array);

function Frequency(array) {
  for (let j = 0; j < array.length; j++) {
    let freq = 0;
    for (let k = 0; k < array.length; k++) {
      if (array[j] == array[k]) {
        freq++;
      }
    }

    let next = freq;

    while (PrimeCheck(next) == 0) {
      let randNum = Math.floor(Math.random() * 10000);
      let randIndex = Math.floor(Math.random() * (array.length - 1));

      for (let l = array.length - 1; l >= randIndex; l--) {
        array[l + 1] = array[l];
      }
      array[randIndex] = randNum;
      next += 1;
    }
  }
  console.log(array);
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
