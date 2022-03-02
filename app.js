import { shuffledDeck } from './cardDeck.js';

let playerMoney = 0;
let computerMoney;
let money;

const computerHide = document.getElementById('computer-hide');
const computerShow = document.getElementById('computer-show');
const computerCash = document.getElementById('computerCash');
const pot = document.getElementById('pot');
const playerCash = document.getElementById('playerCash');
const hitBtn = document.getElementById('hit');
const stayBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoney');
const playerCard1 = document.getElementById('player-card1');
const playerCard2 = document.getElementById('player-card2');
getMoney()

function getMoney() {
    //money = parseInt(prompt('How much would you like to add to your balance?'))
    if(money > 0) {
        start()
    } else {
        //alert("Must be a number more than 0!")
    }
}

function start() {
    console.log(money)
    playerMoney += money; 
    console.log(playerMoney)
    computerMoney = money;
    computerCash.innerHTML = `computer $$$ ${computerMoney}`;
    playerCash.innerHTML = `Player1 $$$ ${playerMoney}`;
}