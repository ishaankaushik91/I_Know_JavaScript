// Inserting all elements of array2 in array1 at random index (RECURSION)
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 11, 12, 13, 14];

Final(0, array2, array1);

function Insertion(index, array, pos) {
  if (index >= pos) {
    array[index + 1] = array[index];
    return Insertion(index - 1, array, pos);
  }
}

function Final(index, array2, array1) {
  if (index < array2.length) {
    let randIndex = Math.floor(Math.random() * (array1.length - 1));
    Insertion(array1.length - 1, array1, randIndex);
    array1[randIndex] = array2[index];
    return Final(index + 1, array2, array1);
  }
  console.log(array1);
}
