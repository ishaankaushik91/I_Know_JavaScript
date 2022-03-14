// Summation of duplicates in array (RECURSION)
let array = [1, 2, 3, 4, 4, 2, 5, 1];

console.log(Summation(0, array));

function Summation(index, array) {
  if (index < array.length) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        freq++;
      }
    }
    if (freq > 1) {
      return array[index] + Summation(index + 1, array);
    }
    return Summation(index + 1, array);
  }
  return 0;
}
