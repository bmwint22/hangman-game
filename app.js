// Come up with a list of words to guess by creating a constant for each word in an array
// Const for randomly selected word
//Display word with underscores
//Create an array to track guessed letters
//Create a constant for remaining attempts
//Select a random word
//Create display with underscores
//Reset guessed letters and attempts
//Show initial game state
//check if letter was already guessed
//Add the letter to guessed letters
//Check if the letter is in the word
//Reveal the letters in display
//Decrease remaining attempts
//Check if there’s a win or loss
//Game Ends or Continues
//If game is over exit the game loop
//Ask if the player wants to play again
//Restart the gameAs a user, I want to guess the letters of a secret word within a set number of attempts while receiving feedback on my progress from the computer.

const words = ('milk', 'jump', 'card', 'rock');
//const [milk, jump, card, rock] = words
//console.log('milk')

const guessedLetters =[]
const maxAttempts = 4;
let remainingAttempts = maxAttempts;

function guessedLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        console.log(`You guessed: ${letter}`);
        }
        else {
            console.log(`You already guessed: ${letter}`)
    }
}

if (remainingAttempts > 0) {
    remainingAttempts--;
  } else {
    console.log("No attempts remaining!");
  }
  

guessedLetter('m')
guessedLetter('i')
guessedLetter('m')
guessedLetter('l')
guessedLetter('k')



console.log('Guessed Letters:', guessedLetters);
console.log('Remaining Attempts:', remainingAttempts);
