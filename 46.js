// Summation of each sub array in a matrix (RECURSION)
let matrix = [
  [1, 2, 3, 4, 5],
  [10, 9, 8, 7],
  [6, 5, 4, 2],
];

Summation(0, matrix);

function Summation(index, matrix) {
  if (index < matrix.length) {
    let sum = 0;
    for (let i = 0; i < matrix[index].length; i++) {
      sum += matrix[index][i];
    }
    console.log("Summation =", sum);
    return Summation(index + 1, matrix);
  }
}
