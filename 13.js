// Frequency of each element in Matrix (RECURSION)
let Matrix = [
  [1, 2, 3, 4, 12, 1],
  [10, 1, 1, 31, 32, 190],
  [80, 2, 3, 3, 2, 1, 1],
];

Frequency(0, Matrix);

function Frequency(index, Matrix) {
  if (index < Matrix.length) {
    for (let i = 0; i < Matrix[index].length; i++) {
      let freq = 0;

      let j = 0;
      if (j < Matrix.length) {
        for (let k = 0; k < Matrix[j].length; k++) {
          if (Matrix[index][i] == Matrix[j][k]) {
            freq++;
          }
        }
        return Frequency(j + 1, Matrix);
      }
      console.log("Frequency of", Matrix[index][i], "=", freq);
    }
    return Frequency(index + 1, Matrix);
  }
}
