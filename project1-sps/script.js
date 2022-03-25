//Generating the random option
var computerSelection = function () {
  var options = ["scissors", "paper", "stone"];
  var randomDecimal = Math.random() * 3;
  var randomNumber = Math.floor(randomDecimal);
  var option = options[randomNumber];
  console.log(option);

  return option;
};

// Generating win conditions
var isPlayerWon = function (playerOption, computerOption) {
  if (
    (playerOption == "scissors" && computerOption == "paper") ||
    (playerOption == "stone" && computerOption == "scissors") ||
    (playerOption == "paper" && computerOption == "stone")
  ) {
    var hasWon = `Computer chose ${computerOption}.<br>You chose ${playerOption}.<br> You win!`;
    return hasWon;
  } else {
    var hasWon = `Computer chose ${computerOption}.<br>You chose ${playerOption}.<br> You lost!`;
    return hasWon;
  }
};

// Checking for draw

var isDraw = function (playerOption, computerOption) {
  if (playerOption == computerOption) {
    var hasDraw = true;
    return hasDraw;
  } else {
    var hasDraw = false;
    return hasDraw;
  }
};

var main = function (input) {
  var computerOption = computerSelection();
  var hasDraw = isDraw(input, computerOption);
  if (!hasDraw) {
    var isWon = isPlayerWon(input, computerOption);
    var outputValue = isWon;
    return outputValue;
  } else {
    return "It's a draw!";
  }
};
