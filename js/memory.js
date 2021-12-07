class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cardsArray) {
    if (!this.cards) {
      return undefined
    }
    const cards = this.cards;
    const length = cards.length;
      // Pick a random index
    for (let i = length-1; i >=0; i--){
      let randIndex = Math.floor(Math.random() * (length))
      
      // And swap the last element with it
      let currentElement = cards[i]
      let indexElement = cards[randIndex]
      cards[i] = indexElement;
      cards[randIndex] = currentElement;
      
    }
    
  }

  checkIfPair(card1, card2) {
    if (card1 && card2) {
      this.pairsClicked+=1;
    }

    if (card1 == card2) {
      this.pairsGuessed+=1;
      return true;
    }

    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed == (this.cards.length/2)) return true;

    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
