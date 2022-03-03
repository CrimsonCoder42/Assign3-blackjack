import { shuffledDeck } from './cardDeck.js';

let playerMoney = 0;
let betAdded = 0;
let computerMoney;
let computerCount = [];
let playerCount = [];
let cardsUsed = [];

const betAmount = document.getElementById('betAmount');
const betBtn = document.getElementById('betBtn');
const computerCash = document.getElementById('compMoney');
const pot = document.getElementById('pot');
const playerCash = document.getElementById('playerMoney');
const hitBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoneyBtn');
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
        computerMoney = addedMoney;
        computerCash.innerHTML = `Computer $$$ ${computerMoney}`;
        addBtn.className = "hidden";
        money.className = "hidden";
        start()
    } else {
        alert("Must be a NUMBER & more than 0!")
    }
}

function start() {
    dealCards()
}

function playerBet() {
    let betPlaced = parseInt(betAmount.value); 
    console.log(betPlaced)
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
    const computerHide = document.getElementById('compCard1');
    const computerShow = document.getElementById('compCard2');
    const playerCard1 = document.getElementById('playerCard1');
    const playerCard2 = document.getElementById('playerCard2');

    computerCount = []
    playerCount = []
    if (cardsUsed.length < 52) {
        for(let i = 0; i < 2; i++){
            computerCount.push(shuffledDeck[Math.floor(Math.random() * 53)]);
            playerCount.push(shuffledDeck[Math.floor(Math.random() * 53)]);
        }
    }
    computerShow.className = computerCount[1].suit === "♣" || computerCount[0].suit === "♠" ? "card black" : "card red";
    computerShow.innerHTML = computerCount[1].suit 
    computerShow.dataset.number = computerCount[1].worth

    playerCard1.className = playerCount[0].suit === "♣" || playerCount[0].suit === "♠" ? "card black" : "card red";
    playerCard1.innerHTML = playerCount[0].suit 
    playerCard1.dataset.number = playerCount[0].worth

    playerCard2.className = playerCount[1].suit === "♣" || playerCount[1].suit === "♠" ? "card black" : "card red";
    playerCard2.innerHTML = playerCount[1].suit 
    playerCard2.dataset.number = playerCount[1].worth

    computerHide.className = "computer-hide";

    console.log(computerCount[0].suit);
    console.log(computerCount[0].worth);
}

console.log(cardsUsed);




