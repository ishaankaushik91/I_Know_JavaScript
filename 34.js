// Summation of duplicates in array (LOOP)
let array = [1, 2, 3, 4, 4, 2, 5, 1];

Summation(array);

function Summation(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        freq++;
      }
    }
    if (freq > 1) {
      sum += array[i];
    }
  }
  console.log(sum);
}
