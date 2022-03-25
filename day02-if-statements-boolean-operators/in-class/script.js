var rollDice = function () {
  let randomDecimalOne = Math.random() * 6;
  let diceNumberOne = Math.floor(randomDecimalOne) + 1;

  let randomDecimalTwo = Math.random() * 6;
  let diceNumberTwo = Math.floor(randomDecimalOne) + 1;

  let winningValue = 11;

  return { diceNumberOne, diceNumberTwo, winningValue };
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  let dice = rollDice();
  console.log(dice);
  if (input == dice.diceNumberOne) {
    var myOutputValue = "You Won";
    return myOutputValue;
  } else if (input == dice.diceNumberTwo) {
    var myOutputValue = "You Won";
    return myOutputValue;
  } else if (input == dice.winningValue) {
    var myOutputValue = "You Won";
    return myOutputValue;
  } else {
    var myOutputValue = "You Lost";
    return myOutputValue;
  }
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (
    input == "chicken rice" ||
    input == "nasi lemak" ||
    input == "curry rice"
  ) {
    var myOutputValue = "rice";
    return myOutputValue;
  } else if (input == "hokkien mee" || input == "laksa" || input == "ramen") {
    var myOutputValue = "noodle";
    return myOutputValue;
  } else {
    var myOutputValue = "others";
    return myOutputValue;
  }
};

var generateNumber = function (rigged = false) {
  if (rigged) {
    return 6;
  } else {
    var randomDecimal = Math.random() * 9;
    var randomNumber = Math.floor(randomDecimal) + 1;

    return randomNumber;
  }
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var randomNumberOne = generateNumber();
  var randomNumberTwo = generateNumber();
  var randomNumberThree = generateNumber();
  var randomNumberFour = generateNumber();

  if (
    input == randomNumberOne ||
    input == randomNumberTwo ||
    input == randomNumberThree ||
    input == randomNumberFour
  ) {
    var myOutputValue = "You won! Huat arh!";
    return myOutputValue;
  } else {
    var myOutputValue = "Close but no cigar.Stop wasting money";
    return myOutputValue;
  }
};

var toCook = function (rigged = false) {
  var foodList = [
    "chicken rice",
    "roti prata",
    "nasi lemak",
    "hokkien mee",
    "Bak kut teh",
    "laksa"
  ];

  if (rigged) {
    return "chicken rice";
  }
  var randomDecimal = Math.random() * 6;
  var randomNumber = Math.floor(randomDecimal);
  var chosenFood = foodList[randomNumber];
  console.log(chosenFood);
  return chosenFood;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var foodToCook = toCook();

  if (input.toLowerCase() == foodToCook) {
    var myOutputValue = "meal is on us!";
    return myOutputValue;
  }
  var myOutputValue = "Sorry! No free meal.";
  return myOutputValue;
};

var isWinningNumber = function (input) {
  var randomDecimal = Math.random() * 9;
  var randomNumber = (randomDecimal + 1) * 1000;
  console.log(randomNumber);
  return randomNumber;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var winningNumber = isWinningNumber();
  if (input <= winningNumber + 1000 && input >= winningNumber - 1000) {
    var myOutputValue = "You won";
    return myOutputValue;
  } else {
    var myOutputValue = "You lost";
    return myOutputValue;
  }
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
