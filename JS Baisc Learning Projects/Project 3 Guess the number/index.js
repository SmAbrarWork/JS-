let random = parseInt(Math.random() * 100 + 1);


const userInput = document.querySelector("#numFeild")
const submit = document.querySelector("#button")
const previousGuess = document.querySelector("#PG")
const remainingGuess = document.querySelector("#GR")
const startOver = document.querySelector("#restart")
const valueLowOrHigh = document.querySelector("#loworhigh")

const paragraph = document.createElement('p')

let previousNum = [];
let numberGuess = 0;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validation(guess);
    })
}

function validation(guess) {
    if (isNaN(guess)) {
        alert('Please enter the valid number')
    } 
    else if (guess < 1) {
        alert('Please enter a number more then 1')
    } else if (guess > 100) {
        alert('Please enter a number less then 100')
    } else {
        previousNum.push(guess);
        if (numberGuess === 11) {
           displayGuess(guess) 
           displayMassage(`Game Over the Random Number is ${random}`)
           endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (random === guess) {
        displayMassage(`U Guess it Right`)
    } else if (random > guess) {
        displayMassage(`Your guess is to low`)
    } else if (random < guess) {
        displayMassage(`Your guess in High`)
    }
}

function displayGuess(guess) {
   userInput.value = '';
   previousGuess.innerHTML += `${guess} `;
   numberGuess++;
   remainingGuess.innerHTML = `${10 - numberGuess}`;
}

function displayMassage(message) {
    valueLowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','')
    paragraph.classList.add('button')
    paragraph.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(paragraph);
    playGame = false
    starGame();
}

function starGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        previousNum = []
        numberGuess = 0;
        previousGuess.innerHTML = '';
        remainingGuess.innerHTML = `${10 - numberGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(paragraph)
        playGame = true
    })
}