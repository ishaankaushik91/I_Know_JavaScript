// Making some promise & Consuming using Async - Await
let mrNums = [1, 2, 3, 5, 7, 11, 12, 33];

// Promisifying function
function ExtractEvens(arr) {
  return new Promise((resolve, reject) => {
    if (!arr) reject("Please pass an array!");
    else resolve(arr.filter((Element) => Element % 3 == 0));
  });
}

// Consuming promise
async function consume() {
  try {
    let response = await ExtractEvens(mrNums);

    /*
            Note : 
            The time I'm not using await for ExtractEvens its not showing
            that promise is pending, instead I'm getting -> Promise {[result]};
        */

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consume();
