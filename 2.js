// Making some promise & Consuming using .then() & .catch()
let mrNums = [1, 2, 3, 5, 7, 11, 12, 33];

// Promisifying function
function ExtractEvens(arr) {
  return new Promise((resolve, reject) => {
    if (!arr) reject("Please pass an array!");
    else resolve(arr.filter((Element) => Element % 3 == 0));
  });
}

ExtractEvens(mrNums)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
