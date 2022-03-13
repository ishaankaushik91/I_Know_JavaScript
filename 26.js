// Inserting element at random index in Matrix (LOOP)
let Matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];

let row = Math.floor(Math.random() * (Matrix.length - 1));
let column = Math.floor(Math.random() * 5);

Insertion(Matrix, row, column, 1000000111);

function Insertion(Matrix, r, c, number) {
  for (let i = 0; i < Matrix.length; i++) {
    for (let j = 0; j < Matrix[i].length; j++) {
      if (r == i && c == j) {
        for (let k = Matrix[r].length - 1; k >= c; k--) {
          Matrix[i][k + 1] = Matrix[i][k];
        }
        Matrix[r][c] = number;
        console.log(Matrix);
        return;
      }
    }
  }
}
