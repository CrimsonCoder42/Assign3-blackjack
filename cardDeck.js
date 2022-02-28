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
       return new PlayingCard(worth, suit, color);
        } )
    } )
}

let deck = new FullDeck();
let hearts = deck.deck[0];
let spades = deck.deck[1];
let clubs = deck.deck[2];
let diamonds= deck.deck[3]
let cardTotal = hearts.length + spades.length + clubs.length + diamonds.length; 
 export let shuffledDeck = []
 console.log(cardTotal)
 
 shuffle()
 function shuffle() {
     while(shuffledDeck.length < 50){
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 4){
            heartCards()
            console.log(randomNumber)
        }else if(randomNumber === 3){
            spadeCards()
            console.log(randomNumber)
        } else if(randomNumber === 2) {
            clubCards()
            console.log(randomNumber)
        } else if(randomNumber === 1){
            diamondCards()
            console.log(randomNumber)
        }
     }
 } 

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

console.log(`this is the shuffled Deck: ${shuffledDeck.length}`)
console.log(shuffledDeck)
console.log(hearts)
console.log(spades)
console.log(clubs)
console.log(diamonds)
