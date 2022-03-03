import { shuffledDeck } from './cardDeck.js';

let playerMoney = 0;
let betAdded = 0;
let computerMoney;
let computerCount = [];
let playerCount = [];
let cardsUsed = [];

const betAmount = document.getElementById('betAmount');
const betBtn = document.getElementById('bet');
const computerCash = document.getElementById('computerCash');
const pot = document.getElementById('pot');
const playerCash = document.getElementById('playerCash');
const hitBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoney');
const stayBtn = document.getElementById('hit');
let money = document.getElementById('moneyAmount');
let cardWorth1 = document.getElementsByClassName("cardWorth1 playCardW1");


addBtn.addEventListener('click', getMoney)
betBtn.addEventListener('click', playerBet)


function getMoney() {
    let addedMoney = parseInt(money.value);
    if(addedMoney > 0) {
        playerMoney += addedMoney;
        playerCash.innerHTML = `Player $$$ ${playerMoney}`;
        computerMoney = 1000;
        computerCash.innerHTML = `computer $$$ ${computerMoney}`;
        addBtn.classList ='hidden';
        money.classList ='hidden';
        start()
    } else {
        alert("Must be a NUMBER & more than 0!")
    }
}

function start() {
    betAmount.classList = 'jackpot';
    betBtn.classList = 'jackpot';
    dealCards()
}

function playerBet() {
    let betPlaced = parseInt(betAmount.value); 
    if(betPlaced > 0){
        betAdded += betPlaced;
        pot.innerHTML = `POT $$$ ${betAdded}`;
        playerMoney -= betPlaced;
        playerCash.innerHTML = `Player $$$ ${playerMoney}`;
    } else {
        alert("Must be a NUMBER & more than 0!");
    }
  
}

function dealCards() {
    const computerHide = document.getElementById('computer-hide');
    const computerShow = document.getElementById('computer-show');
    const playerCard1 = document.getElementById('player-card1');
    const playerCard2 = document.getElementById('player-card2');
    
    let cardWorth2 = document.getElementsByClassName('playCardW2');
    computerCount = []
    playerCount = []
    if (cardsUsed.length < shuffledDeck.length) {
        for(let i = 0; i < 2; i++){
            computerCount.push(shuffledDeck[Math.floor(Math.random() * 53)]);
            playerCount.push(shuffledDeck[Math.floor(Math.random() * 53)]);
        }
    }
    cardsUsed.push(computerCount);
    playerCard1.style.backgroundColor = 'white';
    playerCard2.style.backgroundColor = 'white';
    computerShow.style.backgroundColor = 'white';
    computerHide.style.backgroundColor = 'blue';
    cardWorth1.innerHTML = computerCount[0].worth;

    console.log(computerCount[0].worth);
    console.log(playerCount[0].suit);
}