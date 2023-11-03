/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 */
/**
 * 1. Slumpa ord som ska gissas på
 * 2. Lägg till en addeventlistener för keyup
 * 3. Jämför bokstaven som användaren klickade på med alla bokstäver i ordet
 *      1. Loopa igenom arrayen med alla bokstäver
 *      2. Om bokstaven som användaren gissade finns så visa var
 *      3. Annars addera en del till gubben
 */


let words = ['banan', 'äppelpaj', 'skruvmejsel', 'potatismos', 'korvkiosk'];
const bodyElem = document.querySelector('body');

let randomPosition = Math.floor(Math.random() * words.length);
const selectedWord = words[randomPosition];
console.log(selectedWord);

const letters = selectedWord.split(''); // Splittar ordet till en array med bokstäver för att enklare kunna jämföra
console.log(letters);
const textElem = document.getElementById('text');

let correctGuess = Array(letters.length).fill("_");


let wrongGuess = 0;
let guessedLetter = 0;
let isCorrectGuess = true;


function showLetter() {
    //let letter = event.key;
    //correctGuesses.push(event.key);
    //textElem.innerHTML = correctGuesses;
    textElem.textContent = correctGuess.join(" ");
}


function showHangman() {
    if (wrongGuess == 0) {
        document.querySelector('figure').classList.add('scaffold');
        wrongGuess = 1;
    } else if (wrongGuess == 1) {
        document.querySelector('figure').classList.add('head');
        wrongGuess = 2;
    } else if (wrongGuess == 2) {
        document.querySelector('figure').classList.add('body');
        wrongGuess = 3;
    } else if (wrongGuess == 3) {
        document.querySelector('figure').classList.add('arms');
        wrongGuess = 4;
    } else if (wrongGuess == 4) {
        document.querySelector('figure').classList.add('legs');
        wrongGuess = 5;
    } else if (wrongGuess == 5) {
        textElem.innerHTML = 'You lost ' + '<br>' + 'The right word was: ' + selectedWord + '<br>' + 'Do you want to play again?';
        const restart = document.createElement('button');
        restart.innerHTML = 'Restart game';
        document.getElementById('text').appendChild(restart);
    }
}


bodyElem.addEventListener('keyup', (event) => {
    console.log('Du klickade på: ', event.key); // Få ut vilken tangent användaren klickade på


    let guessedLetter = event.key;
    isCorrectGuess = false;

    for (let i = 0; i < letters.length; i++) {
        if (guessedLetter === letters[i]) {
            correctGuess[i] = guessedLetter; // Updates the correctGuess array
            const CorrectGuess = showLetter();
            isCorrectGuess = true;
        } else if (!correctGuess.includes('_')) {
            textElem.textContent = 'You won!Congratulations!' + 'Do you want to play again?';
            const restart = document.createElement('button');
            restart.innerHTML = 'Restart game';
            document.getElementById('text').appendChild(restart);
        }
    }

    if (!isCorrectGuess) {
        wrongGuess == 0;
        showHangman();
    }
});

