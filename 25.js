// Inserting element at random index in array (RECURSION)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let position = Math.floor(Math.random() * (array.length - 1));
console.log(position);

Traversal(0, array, position, 100000111);

function Insertion(index, array, p) {
  if (index >= p) {
    array[index + 1] = array[index];
    return Insertion(index - 1, array, p);
  }
}

function Traversal(index, array, pos, number) {
  if (index < array.length) {
    if (pos == index) {
      Insertion(array.length - 1, array, pos);
    }
    return Traversal(index + 1, array, pos, number);
  }
  array[pos] = number;
  console.log(array);
}
