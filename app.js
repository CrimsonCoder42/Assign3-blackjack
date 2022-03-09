// import the shuffled Deck from cardDeck 

import {
    shuffledDeck
} from './cardDeck.js';

//iterate over each card and add value to deck

shuffledDeck.forEach(card => {
    if (card.worth === 'K' || card.worth === 'Q'|| card.worth === 'J') {
        card.value = 10;
    } else if (card.worth === "A"){
        card.value = 11;
    }  else {
         card.value = parseInt(card.worth);
    }
})

let player = {
    money: 0, 
    cardsValue: 0,
    turn: true,
    currentHand: [],
    id:1
}

let computer = {
    money: 0, 
    cardsValue: 0,
    turn: false,
    currentHand: [],
    id:2
}

let gameBoard = {
    pot: 0
}


// grab elements from HTML 
const betAmount = document.getElementById('betAmount')
const betBtn = document.getElementById('betBtn');
const hitBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoneyBtn');
const stayBtn = document.getElementById('stay');
const playMoney = document.getElementById('playMoney');

// Add event listeners to button elements 
addBtn.addEventListener('click', getMoney);
betBtn.addEventListener('click', playerBet);
stayBtn.addEventListener('click', stay);
hitBtn.addEventListener('click', hit);

// have element appear at beginning and end of game to provide restart. 

function getMoney() {
    let money = document.getElementById('moneyAmount');
    let addedMoney = parseInt(money.value);
    if (addedMoney > 0 && addedMoney <= 10000) {
        player.money = addedMoney;
        computer.money = addedMoney;
        addBtn.className = "hidden";
        money.className = "hidden";
        playMoney.className = "hidden";
        start()
        gameDisplay()
    } else {
        alert("Must be a NUMBER, more than 0 and less than 10,000!")
    }
}

// have game board and elements appear and deal cards.

function start() {
    pot.innerHTML = "To avoid card counting multiple decks are used."
    betAmount.className = 'betAmt'
    betBtn.className = 'betAmt'
    dealCards()
    handWorth(player.id, player.currentHand)
}

//add money to pot. 

function playerBet() {
    hitBtn.className = 'btn'
    stayBtn.className = 'btn'
    let betPlaced = parseInt(betAmount.value);
    if (betPlaced > 0 && betPlaced < player.money) {  
        gameBoard.pot += (betPlaced * 2);
        player.money -= betPlaced;
        computer.money -= betPlaced; 
        betAmount.value = '';
        gameDisplay()
        handWorth()
    } else if (player.money > player.money) {
        alert("Can't bet more than you have!");
    } else {
        alert("Must be a NUMBER & more than 0!");
    }
}

function handWorth(){
    let computerArray = []
    const computerValue = 0
    computer.currentHand.forEach(card => {
        computerArray.push(card.value)
    });
    computer.cardsValue = computerArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        computerValue
      );
//     const computerValue = 0
//     computer.cardsValue = computer.currentHand.value.reduce(
//         (previousValue, currentValue) => previousValue + currentValue,
//         computerValue
//       );
// console.log(computer.cardsValue)
//       const playerValue = 0
//       player.cardsValue = player.currentHand.value.reduce(
//         (previousValue, currentValue) => previousValue + currentValue,
//         playerValue
//       );
 console.log(computer.cardsValue)
}

function gameDisplay() {
    const potShow = document.getElementById('pot');
    const playerCash = document.getElementById('playerMoney');
    const computerCash = document.getElementById('compMoney');
    playerCash.innerHTML = `$ ${player.money} Score: ${player.cardsValue}`;
    computerCash.innerHTML = `$ ${computer.money}`;
    potShow.innerHTML = gameBoard.pot;
}

// select random cards from deck and display in play area. 

function dealCards() {
    for (let i = 1; i < 3; i++) {
        let playerCards = shuffledDeck[Math.floor(Math.random() * 53)];
        player.currentHand.push(playerCards)
        let computerCards = shuffledDeck[Math.floor(Math.random() * 53)];
        computer.currentHand.push(computerCards)
    }
    cardDisplay(player.currentHand, computer.currentHand);
}

function cardDisplay(arr1, arr2) {
    const comp1 = document.getElementById('compCard1');
    const comp2 = document.getElementById('compCard2');
    const play1 = document.getElementById('playerCard1');
    const play2 = document.getElementById('playerCard2');
    comp1.className = "computer-hide";
    play1.className = `card ${arr1[0].color}`;
    play1.innerHTML = arr1[0].suit;
    play1.dataset.number = arr1[0].worth; 
    play2.className = `card ${arr1[1].color}`;
    play2.innerHTML = arr1[1].suit;
    play2.dataset.number = arr1[1].worth;
    comp2.className = `card ${arr2[1].color}`;
    comp2.innerHTML = arr2[1].suit;
    comp2.dataset.number = arr2[1].worth;
   
}

function stay() {
    checkBust()
    checkTwentyOne()
    checkWin()
    gameDisplay()
}

function showCard() {
    const comp1 = document.getElementById('compCard1');
    let hiddenCard = computer.currentHand[0];
    comp1.className = `card ${hiddenCard.color}`;
    comp1.innerHTML = hiddenCard.suit;
    comp1.dataset.number = hiddenCard.worth;
}

function checkBust() {
    if(computer.cardsValue > 21){
        playerWins()
    } else if(player.cardsValue > 21) {
        computerWins()
    }
checkTwentyOne()
}

function checkTwentyOne() {
    if ( computer.cardsValue === 21 ) {
        computerWins()
    } else if(player.cardsValue === 21) {
        playerWins()
    }
gameDisplay()
checkWin()
}

function checkWin() {

    if (computer.cardsValue < 21 &&  (computer.cardsValue > player.cardsValue)) {
        computerWins()
    } else if(player.cardsValue < 21 &&  (computer.cardsValue > player.cardsValue)) {
        playerWins()
    }
    gameDisplay()
}

function reset(){
    pot.innerHTML= 0;
    gameBoard.pot = 0;
    player.currentHand = []
    computer.currentHand = []
    dealCards()
}


function hit() {
    let nextCard = shuffledDeck[Math.floor(Math.random() * 53)];
    player.currentHand.push(nextCard);
    let morph = document.getElementById('playerHit');
    morph.className = `card ${nextCard.color}`
    morph.innerHTML = nextCard.suit;
    morph.dataset.number = nextCard.worth;
    checkBust()
    gameDisplay()
    handWorth()
    console.log(player.currentHand)
    }


    function computerWins() {
        alert("Computer wins!!")
        computer.money += gameBoard.pot
        showCard()
        reset()
    }

    function playerWins() {
        alert("Player wins!!")
        player.money += gameBoard.pot
        showCard()
        reset()
    }
    
