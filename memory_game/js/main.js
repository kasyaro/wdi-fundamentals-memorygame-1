console.log("Up and running!");

var score = 0;
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 * @source [javascript \- How can I shuffle an array? \- Stack Overflow]
 *         (https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function updateScore() {
  document.getElementById('score').innerHTML = score;
}

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      score++;
    } else {
      alert("Sorry, try again.");
    }
    cardsInPlay = [];
    updateScore();
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}

function createBoard() {
  shuffle(cards);

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();

function reset() {
  document.getElementById('game-board').innerHTML = "";
  createBoard();
}
document.getElementById('reset-game').addEventListener('click', reset);
