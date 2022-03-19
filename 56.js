// Inserting all elements of matrix2 in matrix1 at random index (LOOP)
let matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

let matrix2 = [
  [9, 10, 11, 12, 13],
  [14, 15, 16, 18],
];

Insertion(matrix1, matrix2);

function Insertion(matrix1, matrix2) {
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      let randRow = Math.floor(Math.random() * (matrix1.length - 1));
      let randColumn = Math.floor(Math.random() * 3);

      for (let k = randRow; k < matrix1.length; k++) {
        for (let l = matrix1[k].length - 1; l >= randColumn; l--) {
          matrix1[k][l + 1] = matrix1[k][l];
        }
        matrix1[randRow][randColumn] = matrix2[i][j];
        break;
      }
    }
  }
  console.log(matrix1);
}
