// Considering only nth duplicate in an Array (RECURSION)
let Array = [1, 2, 3, 2, 3, 3, 4, 4, 5, 3];

Duplicate(0, Array);

function Duplicate(index, Array) {
  let count = 0;
  if (index < Array.length) {
    for (let j = index + 1; j < Array.length; j++) {
      if (Array[index] == Array[j]) {
        count++;
      }
    }
    if (count == 2) {
      console.log(Array[index]);
      return;
    }
    return Duplicate(index + 1, Array);
  }
}
