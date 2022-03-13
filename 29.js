// Deleting all non duplicates from array (RECURSION)
let array = [1, 2, 3, 3, 2, 5, 4, 8, 6, 4, 19, 5];

Traversal(0, array);

function Deletion(position, a) {
  if (position < a.length) {
    a[position] = a[position + 1];
    return Deletion(position + 1, a);
  }
}

function Traversal(index, array) {
  if (index < array.length) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        freq++;
      }
    }
    if (freq == 1) {
      Deletion(index, array);
    }
    return Traversal(index + 1, array);
  }
  console.log(array);
}
