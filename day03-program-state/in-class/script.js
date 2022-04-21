// Global Variables

var winCount = 0;
var words = ["banana", "chisel", "faucet"];

var randomWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomWord = words[randomInteger];

  return randomWord;
};

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  //randomly generated word
  var chosenWord = randomWord();

  // outerloop verifies randomword & input
  if (input == chosenWord) {
    winCount = winCount + 1;
    // inner loop verifies count
    if (winCount == 2) {
      return `The word is ${chosenWord}.You've guessed correctly twice, Congrats!`;
    } else {
      return `You've got it right, the word is ${chosenWord}. Your number of wins is ${winCount}.`;
    }
  } else {
    var myOutputValue = `The word is ${chosenWord}. You've got it wrong!`;
    return myOutputValue;
  }
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var chosenWord = randomWord();
  if (input == chosenWord) {
    winCount = winCount + 1;
    if (winCount >= 2) {
      return `You've guess twice correctly!.The chosen word is ${chosenWord}`;
    } else {
      return `You've got it right, the word is ${chosenWord}. Guess one more time to win!`;
    }
  } else {
    return `The chosen word is ${chosenWord}. You have guess incorrectly.`;
    winCount = 0;
  }
};

// Global Variables

var randomWinCount = 0;

var winsGenerator = function () {
  var winCount = [2, 3, 4];
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var winsNeeded = winCount(randomInteger);
  return winsNeeded;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  // Generate a win count once each round
  if (randomWinCount == 0) {
    var randomWinCount = winsGenerator();
    console.log(randomWinCount);
  } else {
    var chosenWord = randomWord();
    if (input == chosenWord) {
      winCount = winCount + 1;
      if (winCount >= randomWinCount) {
        return `Chosen word is ${chosenWord}.Win count needed is ${randomWinCount}.Congrats you won ${winCount}`;
      } else {
        return `You've got it right, the word is ${chosenWord}. Guess one more time to win!`;
      }
    } else {
      return `The chosen word is ${chosenWord}. You have guess incorrectly.`;
      winCount = 0;
    }
  }
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceNumberGenerator = function () {
  let randomDecimal = Math.random() * 6;
  let randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var withinNumberGenerator = function () {
  let randomDecimal = Math.random() * 3;
  let randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  let diceNumber = diceNumberGenerator();
  let withinNumber = withinNumberGenerator();

  if (
    input >= diceNumber - withinNumber ||
    input <= diceNumber + withinNumber
  ) {
    return `Dice number is ${diceNumber}. You win!`;
  } else {
    return `Dice number is ${diceNumber}. You lose.`;
  }
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
