let cardWorth = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
let cardSuits= ["♥", "♠", "♣", "♦"]


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes make a class so deck be be made and exported to app.js. Use default export https://www.digitalocean.com/community/tutorials/js-modules-es6

export default class fullDeck{
    constructor(deck = makeDeck()) {
        this.deck = deck
        console.log(this.deck)
    }
} 

class PlayingCard {
    constructor(suit, worth) {
      this.suit = suit;
      this.worth = worth;
    }

    setColor() {
        if (this.suit === "♠" || this.suit === "♣"){
            return "black"
        } else {
            return "red"
        }
    }
  }



// Steal professors calculator trick to combine suits and worths. 


function makeDeck() {
    for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardWorth.length; j++){
            console.log(cardWorth[j] + cardSuits[i])
            new PlayingCard(cardSuits[i], cardWorth[j])
        }
    }
}
