// Keep inserting random elements at random index until frequency of a number is prime in array (LOOP)
let array = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

Insertion(array);

function Insertion(array) {
  let frequency = 0;

  for (let i = 0; i < array.length; i++) {
    frequency = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        frequency++;
      }
    }

    let q = frequency;

    while (PrimeCheck(q) == 0) {
      let newElement = Math.floor(Math.random() * 10000);
      let k;
      for (
        k = array.length - 1;
        k >= Math.floor(Math.random() * (array.length - 1));
        k--
      ) {
        array[k + 1] = array[k];
      }
      array[k] = newElement;
      q += 1;
    }
  }
  console.log(array);
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
