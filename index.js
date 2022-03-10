import {
    completeDeck
} from './cardDeck.js';

let player = {
    money: 0,
    cardsValue: 0,
    turn: true,
    currentHand: [],
    id: 1
}

let computer = {
    money: 0,
    cardsValue: 0,
    turn: false,
    currentHand: [],
    id: 2
}

let gameBoard = {
    pot: 0
}

let burnCard = [];

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

}

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
    } else if (player.money > player.money) {
        alert("Can't bet more than you have!");
    } else {
        alert("Must be a NUMBER & more than 0!");
    }
    twentyOne()
}

function gameDisplay() {
    const potShow = document.getElementById('pot');
    const playerCash = document.getElementById('playerMoney');
    const computerCash = document.getElementById('compMoney');
    playerCash.innerHTML = `$ ${player.money} Score: ${player.cardsValue}`;
    computerCash.innerHTML = `$ ${computer.money}`;
    potShow.innerHTML = gameBoard.pot;
}

function dealCards() {
    for (let i = 1; i < 3; i++) {
        let playerCards = completeDeck[Math.floor(Math.random() * 53)];
        player.currentHand.push(playerCards)
        player.cardsValue += playerCards.value
        console.log(playerCards)
        let computerCards = completeDeck[Math.floor(Math.random() * 53)];
        console.log(computerCards)
        computer.currentHand.push(computerCards)
        computer.cardsValue += computerCards.value
    }
    console.log(player.cardsValue)
    console.log(computer.cardsValue)
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

function showCard() {
    const comp1 = document.getElementById('compCard1');
    let hiddenCard = computer.currentHand[0];
    comp1.className = `card ${hiddenCard.color}`;
    comp1.innerHTML = hiddenCard.suit;
    comp1.dataset.number = hiddenCard.worth;
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

function twentyOne() {
    if (computer.cardsValue === 21 || player.cardsValue > 21) {
        computerWins()
    } else if (player.cardsValue === 21 || computer.cardsValue > 21) {
        playerWins()
    }
}

function hit() {
    if (player.currentHand.length > 2) {
        let burn = document.getElementById(`${burnCard[0]}`);
        burn.remove()
        let nextCard = completeDeck[Math.floor(Math.random() * 53)];
        console.log(nextCard.value)
        player.cardsValue += nextCard.value
        console.log(nextCard.value)
        let morph = document.getElementById('playerHit');
        morph.className = `card ${nextCard.color}`
        morph.innerHTML = nextCard.suit;
        morph.dataset.number = nextCard.worth;
        morph.id = `hitCard${nextCard.value}`
        burnCard.push(morph.id)
        console.log(burnCard)

    } else {
        let nextCard = completeDeck[Math.floor(Math.random() * 53)];
        player.cardsValue += nextCard.value
        console.log(nextCard)
        let morph = document.getElementById('playerHit');
        morph.className = `card ${nextCard.color}`
        morph.innerHTML = nextCard.suit;
        morph.dataset.number = nextCard.worth;
        morph.id = `hitCard${nextCard.value}`
        burnCard.push(morph.id)
        console.log(burnCard)
    }
    twentyOne()
    gameDisplay()
    console.log(player.currentHand)
}

function reset(){
    let burn = document.getElementById(`${burnCard[0]}`);
    burn.remove()
    pot.innerHTML= 0;
    gameBoard.pot = 0;
    player.currentHand = []
    computer.currentHand = []
    dealCards()
    burnCard = [];
}