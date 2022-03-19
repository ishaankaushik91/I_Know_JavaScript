// Inserting all elements of array2 in array1 at random index (LOOP)
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 11, 12, 13, 14];

Insertion(array1, array2);

function Insertion(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    let randIndex = Math.floor(Math.random() * (array1.length - 1));
    for (let j = array1.length; j >= randIndex; j--) {
      array1[j + 1] = array1[j];
    }
    array1[randIndex] = array2[i];
  }
  console.log(array1);
}
