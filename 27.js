// Inserting element at random index in Matrix (RECURSION)
let Matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
];

let row = Math.floor(Math.random() * (Matrix.length - 1));
let column = Math.floor(Math.random() * 5);

Traversal(0, Matrix, 0, 2, 100011);

function Insertion(index, array, p) {
  if (index >= p) {
    array[index + 1] = array[index];
    return Insertion(index - 1, array, p);
  }
}

function Traversal(index, Matrix, r, c, number) {
  if (index < Matrix.length) {
    for (let j = 0; j < Matrix[index].length; j++) {
      if (r == index && c == j) {
        Insertion(Matrix[index].length - 1, Matrix[index], j);
        Matrix[r][c] = number;
        console.log(Matrix);
        return;
      }
    }
    return Traversal(index + 1, Matrix, r, c);
  }
}
