// Find the largest sum of sub array (LOOP)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [1, 2, 3, 4],
];

console.log(Summations(matrix));

function Summations(matrix) {
  let temp = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
    temp.push(sum);
  }

  for (let k = 0; k < temp.length; k++) {
    if (temp[0] < temp[k]) {
      temp[0] = temp[k];
    }
  }
  return temp[0];
}
