import {
    shuffledDeck
} from './cardDeck.js';

let playerMoney = 0;
let betAdded = 0;
let computerMoney;
let compScore = 0;
let playScore = 0;

const betBtn = document.getElementById('betBtn');
const computerCash = document.getElementById('compMoney');
const pot = document.getElementById('pot');
const playerCash = document.getElementById('playerMoney');
const hitBtn = document.getElementById('hit');
const addBtn = document.getElementById('addMoneyBtn');
const stayBtn = document.getElementById('stay');
const playMoney = document.getElementById('playMoney');


addBtn.addEventListener('click', getMoney);
betBtn.addEventListener('click', playerBet);
stayBtn.addEventListener('click', stay);


function getMoney() {
    let money = document.getElementById('moneyAmount');
    let addedMoney = parseInt(money.value);
    if (addedMoney > 0) {
        playerMoney += addedMoney;
        playerCash.innerHTML = `Player $$$ ${playerMoney}`;
        computerMoney = addedMoney;
        computerCash.innerHTML = `Computer $$$ ${computerMoney}`;
        addBtn.className = "hidden";
        money.className = "hidden";
        playMoney.className = "hidden";
        start()
    } else {
        alert("Must be a NUMBER & more than 0!")
    }
}

function start() {
    betAmount.className = 'betAmt'
    betBtn.className = 'betAmt'
    hitBtn.className = 'btn'
    stayBtn.className = 'btn'
    dealCards()
}

function playerBet() {
    const betAmount = document.getElementById('betAmount');
    let betPlaced = parseInt(betAmount.value);
    console.log(betPlaced)
    if (betPlaced > 0) {
        betAdded += betPlaced;
        pot.innerHTML = `POT $$$ ${betAdded}`;
        playerMoney -= betPlaced;
        playerCash.innerHTML = `Player $$$ ${playerMoney}`;
    } else {
        alert("Must be a NUMBER & more than 0!");
    }

}

function dealCards() {
    const comp1 = document.getElementById('compCard1');
    const comp2 = document.getElementById('compCard2');
    const play1 = document.getElementById('playerCard1');
    const play2 = document.getElementById('playerCard2');
    let cardArray = [comp1, comp2, play1, play2]
    comp1.className = "computer-hide";

    for (let i = 1; i < 5; i++) {

        let card = shuffledDeck[Math.floor(Math.random() * 53)];
        const {
            color,
            suit,
            worth
        } = card;

        cardDisplay(color, suit, worth, cardArray[i])       
    }
}

function cardDisplay(color, suit, worth, card) {
    card.className = `card ${color}`;
    card.innerHTML = suit;
    card.dataset.number = worth;
    // if ((num < 3) && (worth !== "J" || worth !== "Q" || worth !== "K" || worth !== "A" )){
    //     compScore += parseInt(worth);
    //     console.log(compScore)
    // } else if ((num < 3) && (worth === "J" || worth === "Q" || worth === "K")){
    //     compScore += parseInt(worth);
    //     console.log(compScore)
    // } else if ((num < 3)) {
    //     console.log('boom!')
    //}
}

function score() {
    
}




function checkTwentyOnePlus() {
    let playerhand = playerCount.forEach(ele => {
        if (ele.worth === "J" || ele.worth === "Q" || ele.worth === "Q") {

        }
    })
}