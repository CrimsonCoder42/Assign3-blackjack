import { shuffledDeck } from './cardDeck.js';

let playerMoney = 0;
let computerMoney;

const computerHide = document.getElementById('computer-hide');
const computerShow = document.getElementById('computer-show');
const computerCash = document.getElementById('computerCash');
const pot = document.getElementById('pot');
const playerCash = document.getElementById('playerCash');
const hitBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoney');
const stayBtn = document.getElementById('hit');
const playerCard1 = document.getElementById('player-card1');
const playerCard2 = document.getElementById('player-card2');
let money = document.getElementById('moneyAmount');

addBtn.addEventListener('click', getMoney)


function getMoney() {
    let addedMoney = parseInt(money.value);
    if(addedMoney > 0) {
        playerMoney += addedMoney;
        playerCash.innerHTML = `Player $$$ ${playerMoney}`;
        computerMoney = 1000;
        computerCash.innerHTML = `computer $$$ ${computerMoney}`;
        addBtn.classList.add('hidden');
        money.classList.add('hidden');
        start()
    } else {
        alert("Must be a NUMBER & more than 0!")
    }
}

function start() {
    
    
}