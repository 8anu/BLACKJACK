let firstCard;
let secondCard;
let newCard;
let sum = 0;
let msg = "";

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


function getCardImage(suit, value) {
  return `${suit}_${value}.png`;
}


function displayCard(suit, value) {
  const cardImage = document.createElement('img');
  cardImage.src = getCardImage(suit, value);
  cardImage.className = 'card';
  document.getElementById('cards').appendChild(cardImage);
}


function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return { suit: randomSuit, value: randomValue };
}


function startGame() {
  const firstCardDetails = getRandomCard();
  const secondCardDetails = getRandomCard();
  
  firstCard = parseInt(firstCardDetails.value) || 10; //  face cards 10 Ace  11
  secondCard = parseInt(secondCardDetails.value) || 10;
  
  sum = firstCard + secondCard;


  document.getElementById('cards').innerHTML = '';


  displayCard(firstCardDetails.suit, firstCardDetails.value);
  displayCard(secondCardDetails.suit, secondCardDetails.value);

  document.getElementById("sum").textContent = sum;

  if (sum < 21) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "Wohoo! You've got Blackjack!";
  } else {
    msg = "You're out of the game!";
  }

  document.getElementById("result").textContent = msg;
}


function nCard() {
  const newCardDetails = getRandomCard();
  newCard = parseInt(newCardDetails.value) || 10;
  sum += newCard;

  displayCard(newCardDetails.suit, newCardDetails.value);

  document.getElementById("sum").textContent = sum;

  if (sum < 21) {
    msg = "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "Wohoo! You've got Blackjack!";
  } else {
    msg = "You're out of the game!";
  }

  document.getElementById("result").textContent = msg;
}


function resetGame() {
  sum = 0;
  msg = "";
  document.getElementById('cards').innerHTML = ''; // Clear card images
  document.getElementById('sum').textContent = sum; // Reset sum
  document.getElementById('result').textContent = ""; // Clear message
}
