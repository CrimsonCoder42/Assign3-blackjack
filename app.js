import { shuffledDeck } from './cardDeck.js';

let playerMoney = 0;
let computerMoney;

const money = document.querySelector('input').value;
const computerHide = document.getElementById('computer-hide');
const computerShow = document.getElementById('computer-show');
const computerCash = document.getElementById('computerCash').innerHTML;
const pot = document.getElementById('pot');
const playerCash = document.getElementById('playerCash').innerHTML;
const hitBtn = document.getElementById('hit');
const stayBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoney');
const playerCard1 = document.getElementById('player-card1');
const playerCard2 = document.getElementById('player-card2');

addBtn.addEventListener('click', getMoney)


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
    computerCash = `computer $$$ ${computerMoney}`;
    playerCash = `Player1 $$$ ${playerMoney}`;
}