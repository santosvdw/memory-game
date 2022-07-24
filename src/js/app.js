card0 = document.querySelector('#card_1');
card1 = document.querySelector('#card_2');
card2 = document.querySelector('#card_3');
card3 = document.querySelector('#card_4');
card4 = document.querySelector('#card_5');
card5 = document.querySelector('#card_6');

const errorMsg = document.querySelector('.error_msg');
const winBtn = document.querySelector('.win_btn');
const cards = [card0, card1, card2, card3, card4, card5];

let clickedCards = [];
let clickedCardId = [];
let wonGame = false;
let wins = 0;
let completedSets = [];

let cardPics = {
    cat: 'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg',
    dog: 'https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y',
    bunny: 'https://lafeber.com/mammals/wp-content/uploads/rabbit-baby-istock-182836477-900.jpg',
};

let error = (fault) => {
    errorMsg.innerHTML = `There was a problem loading the ${fault}, reload the page to try again.`;
};

let renderCards = () => {
    winBtn.classList.remove('shown');
    pickCardOrder();
};

let pickCardOrder = () => {
    let cardScenario = Math.floor(Math.random() * 3);
    if (cardScenario === 0) {
        scenarioOne();
    } else if (cardScenario === 1) {
        scenarioTwo();
    } else if (cardScenario === 2) {
        scenarioThree();
    } else {
        error('images');
    }
    setTimeout(hideCards, 2000);
};
let scenarioOne = () => {
    cards[0].innerHTML = `<img src="${cardPics.cat}">`;
    cards[1].innerHTML = `<img src="${cardPics.bunny}">`;
    cards[2].innerHTML = `<img src="${cardPics.dog}">`;
    cards[3].innerHTML = `<img src="${cardPics.dog}">`;
    cards[4].innerHTML = `<img src="${cardPics.bunny}">`;
    cards[5].innerHTML = `<img src="${cardPics.cat}">`;
};

let scenarioTwo = () => {
    cards[0].innerHTML = `<img src="${cardPics.bunny}">`;
    cards[1].innerHTML = `<img src="${cardPics.cat}">`;
    cards[2].innerHTML = `<img src="${cardPics.bunny}">`;
    cards[3].innerHTML = `<img src="${cardPics.cat}">`;
    cards[4].innerHTML = `<img src="${cardPics.dog}">`;
    cards[5].innerHTML = `<img src="${cardPics.dog}">`;
};

let scenarioThree = () => {
    cards[0].innerHTML = `<img src="${cardPics.cat}">`;
    cards[1].innerHTML = `<img src="${cardPics.dog}">`;
    cards[2].innerHTML = `<img src="${cardPics.cat}">`;
    cards[3].innerHTML = `<img src="${cardPics.bunny}">`;
    cards[4].innerHTML = `<img src="${cardPics.dog}">`;
    cards[5].innerHTML = `<img src="${cardPics.bunny}">`;
};

let hideCards = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('hidden');
    }
    waitForClick();
};

let waitForClick = () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            displayClickedCard(i);
        });
    }
};

let displayClickedCard = (num) => {
    cards[num].classList.remove('hidden');
    clickedCardId.push(cards[num]);
    console.log(clickedCardId);
    checkForSet(num);
};

let checkForSet = (num) => {
    clickedCards.push(cards[num].innerHTML);
    clickedCardId.push(cards[num]);
    console.log(clickedCards);

    if (clickedCards.length == 2) {
        if (clickedCards[0] == clickedCards[1]) {
            completedSets.push([clickedCards[0], clickedCards[1]]);
            clickedCards = [];
            console.log(completedSets);
            if (completedSets.length == 3) {
                wonGame = true;
                displayWinButton();
            }
        } else {
            console.log('no set');
            hideClickedCard(0, 1);
        }
    }
};

let hideClickedCard = (one, two) => {
    console.log(clickedCards);
    clickedCardId[one].classList.add('hidden');
    setTimeout(console.log('slay'), 1000);
    // clickedCardId[two].classList.add('hidden');
    clickedCardId = [];
    clickedCards = [];
    waitForClick();
};

let displayWinButton = () => {
    winBtn.classList.toggle('shown');
    winBtn.addEventListener('click', resetGame);
};

let resetGame = () => {
    wins += 1;
    for (let i = 0; i < clickedCardId.length; i++) {
        clickedCardId[i].classList.add('hidden');
    }
    location.reload();
};

window.onload = () => {
    renderCards();
};
