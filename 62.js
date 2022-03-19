// Deleting all array elements (LOOP)
let array = [1, 2, 3, 10, 9];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    array[j] = array[j + 1];
  }
}
console.log(array);