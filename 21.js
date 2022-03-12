// Deleting random element from a matrix (RECURSION)
let matrix = [
  [12, 31, 22, 46],
  [10, 3, 4, 1],
  [90, 99, 16, 18],
];

let row = Math.floor(Math.random() * (matrix.length - 1));
let column = Math.floor(Math.random() * 3);

Deletion(0, matrix, row, column);

function Delete(i, array) {
  if (i < array.length) {
    array[i] = array[i + 1];
    return Delete(i + 1, array);
  }
}

function Deletion(index, matrix, r, c) {
  if (index < matrix.length) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (index == r && j == c) {
        Delete(j, matrix[index]);
        return console.log(matrix);
      }
    }
    return Deletion(index + 1, matrix, r, c);
  }
}
