var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";

  for (var i = 0; i < input; i += 1) {
    myOutputValue += "🙂";
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      myOutputValue += "🙂";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < i; j += 1) {
      myOutputValue += "🙂";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      if (i == 0 || i == input - 1 || j == 0 || j == input - 1) {
        myOutputValue += "🙂";
      } else {
        myOutputValue += "💗";
      }
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      if (i == 0 || i == input - 1 || j == 0 || j == input - 1) {
        myOutputValue += "🙂";
      } else if (i == Math.floor(input / 2) && j == Math.floor(input / 2)) {
        myOutputValue += "👩🏼‍🌾";
      } else {
        myOutputValue += "💗";
      }
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var numberOfDiceRoll = 0;
var winCount = 0;
var loseCount = 0;
var isWon = false;

var generateDiceNumber = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var multiDiceBaseMain = function (input) {
  // User determine number of rounds
  if (numberOfDiceRoll == 0) {
    numberOfDiceRoll = input;
    console.log(numberOfDiceRoll);
    return `Number of rounds is ${numberOfDiceRoll}.Please make your guess.`;
  } else {
    // check for any correct guesses
    for (var i = 0; i < numberOfDiceRoll; i += 1) {
      var diceNumber = generateDiceNumber();
      console.log(`Dice Number is ${diceNumber}.`);
      if (diceNumber == input) {
        var isWon = true;
      }
    }
    if (isWon) {
      winCount = winCount + 1;
      var myOutputValue = "You Won";
    } else {
      loseCount = loseCount + 1;
      var myOutputValue = "You Lost";
    }
    return `${myOutputValue}.Win Count is ${winCount}. Loss Count is ${loseCount}.`;
  }
};

var multiDiceMultiRoundMain = function (input) {
  if (numberOfDiceRoll == 0) {
    numberOfDiceRoll = input;
    console.log(numberOfDiceRoll);
    return `Number of rounds is ${numberOfDiceRoll}.Please make your guess.`;
  } else {
    // check for any correct guesses
    for (var i = 0; i < 4; i += 1) {
      for (var j = 0; j < numberOfDiceRoll; j += 1) {
        var diceNumber = generateDiceNumber();
        console.log(`Dice Number is ${diceNumber}.`);
        if (diceNumber == input) {
          var isWon = true;
        }
      }
    }
    if (isWon) {
      winCount = winCount + 1;
      var myOutputValue = "You Won";
    } else {
      loseCount = loseCount + 1;
      var myOutputValue = "You Lost";
    }
    return `${myOutputValue}.Win Count is ${winCount}. Loss Count is ${loseCount}.`;
  }
};

var numberOfPlayers = 0;

var multiDiceTwoPlayerMain = function (input) {
  if (numberOfPlayers == 0) {
    numberOfPlayers = input;
    return `There are ${numberOfPlayers} players in this game. First player to first input the number of rounds.`;
  } else {
    for (var k = 1; k < numberOfPlayers + 1; k += 1) {
      if (numberOfDiceRoll == 0) {
        numberOfDiceRoll = input;
        console.log(numberOfDiceRoll);
        return `Number of rounds is ${numberOfDiceRoll}.Please make your guess.`;
      } else {
        // check for any correct guesses
        for (var i = 0; i < 4; i += 1) {
          for (var j = 0; j < numberOfDiceRoll; j += 1) {
            var diceNumber = generateDiceNumber();
            console.log(`Dice Number is ${diceNumber}.`);
            if (diceNumber == input) {
              var isWon = true;
            }
          }
        }
        if (isWon) {
          winCount = winCount + 1;
          var myOutputValue = "You Won";
        } else {
          loseCount = loseCount + 1;
          var myOutputValue = "You Lost";
        }
        return `${myOutputValue}.Win Count is ${winCount}. Loss Count is ${loseCount}.Player ${
          k + 1
        } is next.`;
      }
    }
  }
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
