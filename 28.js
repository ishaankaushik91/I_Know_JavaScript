// Deleting all non duplicates from array (LOOP)
let array = [1, 2, 3, 3, 2, 5, 4, 8, 6, 4, 19, 5];

Deletion(array);

function Deletion(array) {
  for (let i = 0; i < array.length; i++) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        freq++;
      }
    }

    if (freq == 1) {
      for (let k = i; k < array.length; k++) {
        array[k] = array[k + 1];
      }
    }
  }
  console.log(array);
}
