document.addEventListener("DOMContentLoaded", function() {
  const gameboard = document.getElementById("gameboard");
  const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E','F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J','K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O','P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T',
    'U', 'U', 'V', 'V', 'W', 'W', 'X', 'X', 'Y', 'Y', 'Z', 'Z', 'Ä', 'Ä', 'Ö', 'Ö', 'Ü', 'Ü', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e','f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j','k', 'k', 'l', 'l', 'm', 'm', 'n', 'n', 'o', 'o','p', 'p', 'q', 'q', 'r', 'r', 's', 's', 't', 't',
    'u', 'u', 'v', 'v', 'w', 'w']

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function createCard(value) {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.textContent = value;
    card.addEventListener("click", flipCard);
    return card;
  }

  function createGameboard() {
    const shuffledCards = shuffle(cards);

    for (let i = 0; i < shuffledCards.length; i++) {
      const card = createCard(shuffledCards[i]);
      gameboard.appendChild(card);
    }
  }

  let flippedCards = [];
  let matchedCards = [];

  function flipCard() {
    if (!this.classList.contains("matched") && flippedCards.length < 2) {
      this.classList.remove("hidden");
      flippedCards.push(this);

      if (flippedCards.length === 2) {
        const card1 = flippedCards[0];
        const card2 = flippedCards[1];

        if (card1.textContent === card2.textContent) {
          card1.classList.add("matched");
          card2.classList.add("matched");
          matchedCards.push(card1, card2);
          flippedCards = [];

          if (matchedCards.length === cards.length) {
            setTimeout(function() {
              alert("Glückwunsch, du hast gewonnen!");
            }, 500);
          }
        } else {
          setTimeout(function() {
            card1.classList.add("hidden");
            card2.classList.add("hidden");
            flippedCards = [];
          }, 1000);
        }
      }
    }
  }

  createGameboard();
});
