var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var setNumber = Math.random() * 6;
  var setInteger = Math.floor(setNumber) + 1;

  var myOutputValue = "Dice value is " + setInteger;
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "the door shall not open.";
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += "but youre nearly there.";
  } else {
    myOutputValue += "nope, this is far from the phrase";
  }
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var setNumber = Math.random() * 6;
  var diceNumber = Math.floor(setNumber) + 1;

  var myOutputValue = "You lost! The dice number is " + diceNumber;

  if (input == diceNumber) {
    myOutputValue = "You won!, the dice number is " + diceNumber;
  }

  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var setNumber = Math.random() * 6;
  var diceNumber = Math.floor(setNumber) + 1;
  var twiceNumber = diceNumber * 2;

  var myOutputValue = "You lost! The dice number is " + twiceNumber;

  if (input == twiceNumber) {
    myOutputValue = "You won!, the dice number is " + twiceNumber;
  }

  return myOutputValue;
};
