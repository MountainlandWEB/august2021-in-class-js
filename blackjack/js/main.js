function getDeck() {
  return new Promise((resolve, reject) => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
}

function getCards(count, deckId) {
  return new Promise((resolve, reject) => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw?count=${count}`)
      .then((response) => response.json())
      .then((data) => resolve(data.cards));
  });
}

function displayCards(cards, playerId) {
  const cardsElm = document.getElementById(`${playerId}-cards`);
  cards.forEach((card) => {
    cardsElm.innerHTML += `<img src="${card.image}">`;
  });
}

const deckPromise = getDeck();

deckPromise.then((deck) => {
  const cardsPromise = getCards(4, deck.deck_id);
  cardsPromise.then((cards) => {
    displayCards(cards.slice(0, 2), 'player1');
    displayCards(cards.slice(2), 'player2');
  });
});

function hitMe(playerId) {
  deckPromise.then((deck) => {
    const cardsPromise = getCards(1, deck.deck_id);
    cardsPromise.then((cards) => {
      displayCards(cards, playerId);
    });
  });
}

// what is the big O of this?
function printTwice(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
  for (let j = 0; j < array.length; j++) {
    console.log(j);
  }

  console.log(array[0]);
}


