// import the shuffled Deck from cardDeck 

import {
    shuffledDeck
} from './cardDeck.js';


let player = {
    money: 0, 
    cardValue: 0,
    turn: true,
    currentHand: [],
    id:1
}

let computer = {
    money: 0, 
    cardValue: 0,
    turn: false,
    currentHand: [],
    id:2
}

// grab elements from HTML 
let betAdded = 0;
const betAmount = document.getElementById('betAmount')
const betBtn = document.getElementById('betBtn');
const pot = document.getElementById('pot');
const hitBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoneyBtn');
const stayBtn = document.getElementById('stay');
const playMoney = document.getElementById('playMoney');

// Add event listeners to button elements 
addBtn.addEventListener('click', getMoney);
betBtn.addEventListener('click', playerBet);
stayBtn.addEventListener('click', stay);

// have element appear at beginning and end of game to provide restart. 

function getMoney() {
    let money = document.getElementById('moneyAmount');
    let addedMoney = parseInt(money.value);
    if (addedMoney > 0) {
        player.money += addedMoney;
        console.log(player.money)
        computer.money = addedMoney;
        addBtn.className = "hidden";
        money.className = "hidden";
        playMoney.className = "hidden";
        start()
        gameDisplay()
    } else {
        alert("Must be a NUMBER & more than 0!")
    }
}

// have game board and elements appear and deal cards.

function start() {
    pot.innerHTML = "To avoid card counting multiple decks are used."
    betAmount.className = 'betAmt'
    betBtn.className = 'betAmt'
    dealCards()
    handWorth()
}

//add money to pot. 

function playerBet() {
    hitBtn.className = 'btn'
    stayBtn.className = 'btn'
    let betPlaced = parseInt(betAmount.value);
    if (betPlaced > 0) {  
        betAdded += (betPlaced * 2);
        pot.innerHTML = `POT $$$ ${betAdded}`;
        player.money -= betPlaced;
        computer.money -= betPlaced; 
        betAmount.value = '';
        gameDisplay()
    } else {
        alert("Must be a NUMBER & more than 0!");
    }
}


function handWorth(){
    player.currentHand.forEach(card => {
        if(card.worth === "J" || card.worth === "Q" ||card.worth === "K") {
            player.cardValue += 10;
        } else if (card.worth === "A"){
            player.cardValue += 11;
        }else {
            player.cardValue += parseInt(card.worth)
        }
    })
    computer.currentHand.forEach(card => {
        if(card.worth === "J" || card.worth === "Q" ||card.worth === "K") {
            computer.cardValue += 10;
        } else if (card.worth === "A"){
            computer.cardValue += 11;
        }else {
            computer.cardValue += parseInt(card.worth)
        }
    })
}

function gameDisplay() {
    const playerCash = document.getElementById('playerMoney');
    const computerCash = document.getElementById('compMoney');
    playerCash.innerHTML = `$ ${player.money} Score: ${player.cardValue}`;
    computerCash.innerHTML = `$ ${computer.money}`;
}

// select random cards from deck and display in play area. 

function dealCards() {

    for (let i = 1; i < 3; i++) {
        let playerCards = shuffledDeck[Math.floor(Math.random() * 53)];
        player.currentHand.push(playerCards)
        console.log(player.currentHand)
        let computerCards = shuffledDeck[Math.floor(Math.random() * 53)];
        computer.currentHand.push(computerCards)
        console.log(computer.currentHand)
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
    const comp1 = document.getElementById('compCard1');
    let hiddenCard = computer.currentHand[0];
    comp1.className = `card ${hiddenCard.color}`;
    comp1.innerHTML = hiddenCard.suit;
    comp1.dataset.number = hiddenCard.worth;
}




function checkWinner() {

}