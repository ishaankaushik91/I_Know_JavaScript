// Save the mouse (LOOP)
import readlineSync from "readline-sync";
import color from "color-cli";

async function game() {
  try {
    console.clear();
    console.log("--------------------------");
    console.log("MICKEY MOUSE");
    console.log("--------------------------");

    let username = readlineSync.question(`Please enter a guest a username : `);

    while (username == "") {
      username = readlineSync.question(`Cannot be left empty! enter again: `);
    }

    let Matrix = new Array(10);
    // Filling all columns with 'Cat'
    for (let i = 0; i < Matrix.length; i++) {
      Matrix[i] = new Array(10);
      Matrix[i].fill("Cat");
    }
    // Random position where mouse will be sitting
    let randomRow = Math.floor(Math.random() * (Matrix.length - 1));
    let randomColumn = Math.floor(Math.random() * 10);
    Matrix[randomRow][randomColumn] = "Mouse";
    console.log(Matrix);

    // Only 3 chances given to user to save the mouse & asking their guess
    let chances = 3,
      row,
      column;
    row = readlineSync.questionInt("Enter the row where mouse is : ");
    column = readlineSync.questionInt("Enter the column where mouse is : ");

    // if in first attempt saved
    if (randomColumn == column && randomRow == row) {
      throw `🐭 : ${username}, thank you hero`;
    }

    // Making the further
    while ((randomRow != row || randomColumn != column) && chances >= 1) {
      console.log(
        `🐭 : Only ${chances - 1} attempts remaing, hurry up cats are coming`
      );
      row = readlineSync.questionInt("Enter the row again : ");
      column = readlineSync.questionInt("Enter the column again : ");
      chances--;
    }
    console.log("🐭 : I was at", randomRow, ",", randomColumn, "😵");
  } catch (error) {
    console.log(error);
  }
}
game();
