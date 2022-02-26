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

 class FullDeck{
    constructor(deck = worthsSuits()) {
        this.deck = deck
        
    }
} 
class PlayingCard {
    constructor(suit, worth) {
      this.suit = suit;
      this.worth = worth;
      //this.color = color;
    }

  }

worthsSuits()

function worthsSuits() {
    return cardSuits.map(suit => {
       return cardWorth.map(worth => {
       return new PlayingCard(worth, suit);
        } )
    } )
}

let deck = new FullDeck();
let hearts = deck.deck[0];
let spades = deck.deck[1];
let clubs = deck.deck[2];
let diamonds= deck.deck[3]
 export let shuffledDeck = []

function shuffle() {
    while (shuffledDeck.length < )
} 

function heartCards() {

}
function spadeCards() {
    
}
function clubCards() {
    
}
function diamondCards() {
    
}

console.log(hearts)
console.log(spades)
console.log(clubs)
console.log(diamonds)
