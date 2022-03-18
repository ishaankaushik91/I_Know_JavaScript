// Find the largest sum of sub array (RECURSION)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [1, 2, 3, 4],
];

Summations(0, matrix, []);

function Summations(index, matrix, temp) {
  if (index < matrix.length) {
    let sum = 0;
    for (let i = 0; i < matrix[index].length; i++) {
      sum += matrix[index][i];
    }
    temp.push(sum);
    return Summations(index + 1, matrix, temp);
  }
  Largest(0, temp);
  return 0;
}

function Largest(index, array) {
  if (index < array.length) {
    if (array[0] < array[index]) {
      array[0] = array[index];
      return Largest(index + 1, array);
    }
    return Largest(index + 1, array);
  }
  console.log(array[0]);
  return 0;
}
