// Deleting all array elements (RECURSION)
let array = [1, 2, 3, 10, 9];

Deletion(0, array);

function Removal(index, array) {
  if (index < array.length) {
    array[index] = array[index + 1];
    return Removal(index + 1, array);
  }
}

function Deletion(index, array) {
  if (index < array.length) {
    Removal(0, array);
    return Deletion(index + 1, array);
  }
  console.log(array);
}
