//Global Variables

var gameDeck = [];
var playerHand = [];
var dealerHand = [];
var playerValue = 0;
var dealerValue = 0;

// Function that creates a deck of cards, used by createNewDeck function
var createDeck = function () {
  // deck array
  var deck = [];
  // for 'while loop' to create suits for cards
  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var indexSuits = 0;
  while (indexSuits < suits.length) {
    var currSuit = suits[indexSuits];
    // 13 ranks... ace to king - rank to define "card positions"
    var indexRanks = 1;
    while (indexRanks <= 13) {
      var cardName = indexRanks;
      // define card value - differentiate from rank: 'ace' = 1 / 11, 'jack' & 'queen' & 'king' = 10
      if (cardName == 1) {
        cardName = "ace";
        // define ace value as 11 all the way. if handValue > 10, -11 to total value
        // vs. coding a function to redefine the value for ace
      }
      if (cardName == 11) {
        cardName = "jack";
      }
      if (cardName == 12) {
        cardName = "queen";
      }
      if (cardName == 13) {
        cardName = "king";
      }
      var card = {
        name: cardName,
        suit: currSuit,
        rank: indexRanks
      };
      deck.push(card);
      indexRanks = indexRanks + 1;
    }
    indexSuits = indexSuits + 1;
  }
  return deck;
};

var getRandomIndex = function (max) {
  // Add a new card into hand
  var randomIndex = Math.floor(Math.random() * max);
  return randomIndex;
};

// Shuffle Deck
var shuffleDeck = function (deck) {
  for (let currentIndex = 0; currentIndex < deck.length; currentIndex += 1) {
    // Select a random index in the deck
    const randomIndex = getRandomIndex(deck.length);
    // Select the card that corresponds to randomIndex
    const randomCard = deck[randomIndex];
    // Select the card that corresponds to currentIndex
    const currentCard = deck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    deck[currentIndex] = randomCard;
    deck[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return deck;
};

var drawCards = function (player, deck) {
  // Player draw 2 cards
  for (var cardInHand = 0; cardInHand < 2; cardInHand += 1) {
    var randomCard = gameDeck.pop();
    player.push(randomCard);
  }
};

var checkBlackJack = function (player) {
  // Setting initial condition to be false, player did not draw 21 points
  var isBlackJack = false;
  var playerCardOne = player[0];
  var playerCardTwo = player[1];
  // Check if player got 21 upon drawing
  if (
    (playerCardOne.name == "ace" && playerCardTwo.rank >= 10) ||
    (playerCardTwo.name == "ace" && playerCardOne.rank >= 10)
  ) {
    isBlackJack = true;
  }
  return isBlackJack;
};

var calculateHandValue = function (player) {
  var totalValue = 0;
  var numberofAce = 0;

  for (var cardInHand = 0; cardInHand < player.length; cardInHand += 1) {
    var card = player[cardInHand];
    console.log(card);
    //Check if its an ace
    if (card.name == "ace") {
      totalValue += 11;
      numberofAce += 1;
    } else if (
      card.name == "jack" ||
      card.name == "queen" ||
      card.name == "king"
    ) {
      totalValue += 10;
    } else {
      totalValue += card.rank;
    }
    console.log(totalValue);
    //Check if its king queen jack

    for (
      var checkAceCount = 0;
      checkAceCount < numberofAce;
      checkAceCount += 1
    ) {
      if (totalValue > 21) {
        totalValue -= 10;
      }
    }
  }
  return totalValue;
};

var main = function () {
  // Initiate a New Deck
  gameDeck = shuffleDeck(createDeck());
  console.log(gameDeck);

  // Player draws two cards initially
  drawCards(playerHand);
  drawCards(dealerHand);

  createCardElements(playerHand, "#player-cards");

  // Check if any player has 21 points
  var playerBlackjackResults = checkBlackJack(playerHand);
  var dealerBlackjackResults = checkBlackJack(dealerHand);

  if (playerBlackjackResults == true && dealerBlackjackResults == true) {
    return `Both players drew 21. It's a tie`;
  } else if (
    playerBlackjackResults == true &&
    dealerBlackjackResults == false
  ) {
    return `Player drew 21 points. Player wins`;
  } else if (
    playerBlackjackResults == false &&
    dealerBlackjackResults == true
  ) {
    return `Dealer drew 21 points. Player wins`;
  } else {
    // Check if any player has 21 points
    playerValue = calculateHandValue(playerHand);
    dealerValue = calculateHandValue(dealerHand);
    console.log(`${playerValue} and ${dealerValue}`);
  }
  return `Your hand is ${playerValue}. Hit or Stand?`;
};

var stand = function () {
  while (dealerValue < 17) {
    dealerHand.push(gameDeck.pop());
    dealerValue = 0;
    dealerValue = calculateHandValue(dealerHand);
  }
  createCardElements(dealerHand, "#dealer-cards");
  console.log(dealerHand);

  if (dealerValue > 21 && playerValue > 21) {
    return `Player Value: ${playerValue}. Dealer Value: ${dealerValue}. It's a draw!`;
  } else if (dealerValue > 21 && playerValue < 21) {
    return `Player Value: ${playerValue}. Dealer Value: ${dealerValue}. Player wins!`;
  } else if (dealerValue < 21 && playerValue > 21) {
    return `Player Value: ${playerValue}. Dealer Value: ${dealerValue}. Dealer wins!`;
  } else if (dealerValue > playerValue) {
    return `Player Value: ${playerValue}. Dealer Value: ${dealerValue}. Dealer wins!`;
  } else {
    return `Player Value: ${playerValue}. Dealer Value: ${dealerValue}. Player wins!`;
  }
};

var hit = function () {
  playerHand.push(gameDeck.pop());
  playerValue = 0;
  playerValue = calculateHandValue(playerHand);
  return `Your hand value is ${playerValue}. Hit or Stand`;
};

var formatSuit = function (card) {
  if (card.suit == "diamond") {
    return `♦`;
  } else if (card.suit == "clubs") {
    return `♣`;
  } else if (card.suit == "hearts") {
    return `♥`;
  } else {
    return `♠`;
  }
};

var formatName = function (card) {
  if (card.rank == "11") {
    return `J`;
  } else if (card.rank == "12") {
    return `Q`;
  } else if (card.rank == "13") {
    return `K`;
  } else if (card.rank == "1") {
    return `A`;
  } else {
    return `${card.rank}`;
  }
};
// call this function like this: createCardElements(playerHand,'#player-cards')
var createCardElements = function (cardArray, divId) {
  var cardRowDiv = document.querySelector(divId); // card-row

  for (var i = 0; i < cardArray.length; i += 1) {
    // card
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    // card elements
    var suitDiv = document.createElement("h3");
    suitDiv.classList.add("card-suit");
    suitDiv.innerText = formatSuit(cardArray[i]);
    var cardNumber = document.createElement("h3");
    cardNumber.classList.add("card-number");
    cardNumber.innerText = formatName(cardArray[i]);

    // putting card elements in card container
    cardDiv.appendChild(suitDiv);
    cardDiv.appendChild(cardNumber);

    // put cards into your card-row
    cardRowDiv.appendChild(cardDiv);
  }
};
