//Global Variable

let playerOneScore = 0;
let playerTwoScore = 0;

// Helper Functions

// Dice Roll
const diceRoll = function () {
  let randomNumber = Math.random() * 6;
  let randomInteger = Math.floor(randomNumber) + 1;
  return randomInteger;
};

// Generate player combined Number
const getCombinedNumber = function () {
  let diceOne = diceRoll();
  let diceTwo = diceRoll();

  if (diceOne > diceTwo) {
    let combinedNumber = Number("" + diceTwo + diceOne);
    console.log(combinedNumber);
    return combinedNumber;
  } else {
    let combinedNumber = Number("" + diceTwo + diceOne);
    console.log(combinedNumber);
    return combinedNumber;
  }
};

var main = function (input) {
  let playerOneNumber = getCombinedNumber();
  let playerTwoNumber = getCombinedNumber();

  if (playerOneNumber > playerTwoNumber) {
    playerOneScore += 1;
    return `Player One combined Number is ${playerOneNumber}.</br>Player Two combined Number is ${playerTwoNumber}.</br>Player One wins.</br>
    Scores - Player 1: ${playerOneScore}, Player 2: ${playerTwoScore}`;
  } else {
    playerTwoScore += 1;
    return `Player One combined Number is ${playerOneNumber}.</br>Player Two combined Number is ${playerTwoNumber}.</br>Player Two wins.</br>
    Scores - Player 1: ${playerOneScore}, Player 2: ${playerTwoScore}`;
  }
};
