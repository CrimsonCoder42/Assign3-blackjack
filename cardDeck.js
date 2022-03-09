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

worthSuits()

function worthSuits() {
    let color;
    return cardSuits.map(suit => {
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

//Creates decks separated by suits. exports the shuffled cards to app.js.

let deck = new FullDeck();
let hearts = deck.deck[0];
let spades = deck.deck[1];
let clubs = deck.deck[2];
let diamonds= deck.deck[3]
let cardTotal = hearts.length + spades.length + clubs.length + diamonds.length; 
export let shuffledDeck = []
 
 // uses math.Random to randomize card selection to shuffleDeck. 
 
 shuffle()
 function shuffle() {
     while(shuffledDeck.length < 53){
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 4){
            heartCards()
        }else if(randomNumber === 3){
            spadeCards()
        } else if(randomNumber === 2) {
            clubCards()
        } else if(randomNumber === 1){
            diamondCards()
        }
     }
 } 

// When function called pushes random card by suit into shuffledDeck. Will not allow a card to populate shuffled deck that already exists. 

function heartCards() {
    let randomHeart = hearts[Math.floor(Math.random() * 14)];
    if (!shuffledDeck.includes(randomHeart)){
        shuffledDeck.push(randomHeart);
    }
}

function spadeCards() {
    let randomSpade = spades[Math.floor(Math.random() * 14)];
    if (!shuffledDeck.includes(randomSpade)){
        shuffledDeck.push(randomSpade);
    }
}

function clubCards() {
    let randomClub = clubs[Math.floor(Math.random() * 14)];
    if (!shuffledDeck.includes(randomClub)){
        shuffledDeck.push(randomClub);
    }
}
function diamondCards() {
    let randomDiamond = diamonds[Math.floor(Math.random() * 14)];
    if (!shuffledDeck.includes(randomDiamond)){
        shuffledDeck.push(randomDiamond);
    }
}

// prevents any undefined elements to exist in deck. 
shuffledDeck = shuffledDeck.filter(function( element){
    return element !== undefined;
})







