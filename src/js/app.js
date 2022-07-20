card0 = document.querySelector('#card_1');
card1 = document.querySelector('#card_2');
card2 = document.querySelector('#card_3');
card3 = document.querySelector('#card_4');
card4 = document.querySelector('#card_5');
card5 = document.querySelector('#card_6');
let cards = [card0, card1, card2, card3, card4, card5];

let cardPics = {
    url1: 'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg',
    url2: 'https://play-lh.googleusercontent.com/6f6MrwfRIEnR-OIKIt_O3VdplItbaMqtqgCNSOxcfVMCKGKsOdBK5XcI6HZpjssnB2Y',
    url3: 'https://lafeber.com/mammals/wp-content/uploads/rabbit-baby-istock-182836477-900.jpg',
};

let scenarioOne = () => {
    cards[0].innerHTML = `<img src="${cardPics.url2}">`;
    cards[1].innerHTML = `<img src="${cardPics.url3}">`;
    cards[2].innerHTML = `<img src="${cardPics.url1}">`;
    cards[3].innerHTML = `<img src="${cardPics.url1}">`;
    cards[4].innerHTML = `<img src="${cardPics.url3}">`;
    cards[5].innerHTML = `<img src="${cardPics.url2}">`;
};

let scenarioTwo = () => {
    cards[0].innerHTML = `<img src="${cardPics.url3}">`;
    cards[1].innerHTML = `<img src="${cardPics.url2}">`;
    cards[2].innerHTML = `<img src="${cardPics.url3}">`;
    cards[3].innerHTML = `<img src="${cardPics.url2}">`;
    cards[4].innerHTML = `<img src="${cardPics.url1}">`;
    cards[5].innerHTML = `<img src="${cardPics.url1}">`;
};

let scenarioThree = () => {
    cards[0].innerHTML = `<img src="${cardPics.url2}">`;
    cards[1].innerHTML = `<img src="${cardPics.url1}">`;
    cards[2].innerHTML = `<img src="${cardPics.url2}">`;
    cards[3].innerHTML = `<img src="${cardPics.url3}">`;
    cards[4].innerHTML = `<img src="${cardPics.url2}">`;
    cards[5].innerHTML = `<img src="${cardPics.url1}">`;
};

let error = (fault) => {
    console.log(`There was a problem loading the ${fault}`);
};

let renderCards = () => {
    console.log('Rendering cards...');
    pickCardOrder();
};

let pickCardOrder = () => {
    let cardScenario = Math.floor(Math.random() * 3);
    console.log(cardScenario);
    if (cardScenario === 0) {
        scenarioOne();
    } else if (cardScenario === 1) {
        scenarioTwo();
    } else if (cardScenario === 2) {
        scenarioThree();
    } else {
        error('images');
    }
    hideCards();
};

let hideCards = () => {
    console.log('Hiding cards...');
};

let test = () => {
    console.log('bla');
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i]);
        cards[i].innerHTML = `<img src="${cardPics.url1}">`;
        console.log(i);
    }
};

renderCards();
