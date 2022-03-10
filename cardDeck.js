// create arrays of worths and suits.

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


// class makes playing cards and full deck of 52 separated by worth. 

 class FullDeck{
    constructor(deck = worthSuits()) {
        this.deck = deck
        
    }
} 
class PlayingCard {
    constructor(suit, worth, color) {
      this.suit = suit;
      this.worth = worth;
      this.color = color;
      
    }

  }

// sets color of each card by suit. 

worthSuits()

function worthSuits() {
    let color;
    return cardSuits.flatMap(suit => {
       return cardWorth.map(worth => {
           if (suit === "♥" || suit === "♦" ) {
               color = "red"
           } else {
               color = "black"
           }
       return new PlayingCard(suit, worth, color);
        } )
    } )
}

let deck = new FullDeck();
export let completeDeck = deck.deck


// sets card value separate from face worth. 

completeDeck.forEach(card => {
    if (card.worth === 'K' || card.worth === 'Q'|| card.worth === 'J') {
        card.value = 10;
    } else if (card.worth === "A"){
        card.value = 11;
    }  else {
         card.value = parseInt(card.worth);
    }
})






