const coin = document.querySelector('.coin');
const tapTextElement = document.querySelector('.tap-text');
const result = document.querySelector('.result');

function flipCoin() {
    coin.classList.add('flipped');
    setTimeout(() => {
        coin.classList.remove('flipped');
    }, 400);

    let number = Math.floor(Math.random() *2);

    if(number === 0){
        result.innerHTML = 'Heads!';
    } else {
        result.innerHTML = 'Tails!';
    }
    tapTextElement.innerHTML = 'Tap to flip again!';

    
}

function reset(){
    coin.classList.remove('flipped');
    result.innerHTML = '';
    tapTextElement.innerHTML = 'Tap on the coin to flip it!';
}