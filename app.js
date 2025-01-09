const wordElement = document.querySelector('.word');
const guessesElement = document.querySelector('.guesses');
const messageElement = document.querySelector('.message');
const wrongGuessesElement = document.querySelector('.wrong-guesses');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');


const words = ['milk', 'jump', 'card', 'rock']; 
const selectedWord = words[Math.floor(Math.random() * words.length)]; 
const guessedLetters = [];
const maxAttempts = 4;
let remainingAttempts = maxAttempts;
let revealedWord = '_'.repeat(selectedWord.length).split('');
let wrongGuesses = [];


function updateWordDisplay() {
  wordElement.textContent = revealedWord.join(' ');
}


function updateWrongGuesses() {
  wrongGuessesElement.textContent = `Wrong Guesses: ${wrongGuesses.join(', ')}`;
}


function setMessage(message) {
  messageElement.textContent = message;
}


function handleGuess() {
  const guess = guessInput.value.toLowerCase();
  guessInput.value = ''; 
  setMessage(''); 

  if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
    setMessage('Please enter a valid single letter!');
    return;
  }

  if (guessedLetters.includes(guess) || wrongGuesses.includes(guess)) {
    setMessage('You already guessed that letter!');
    return;
  }

  guessedLetters.push(guess);

  if (selectedWord.includes(guess)) {
    selectedWord.split('').forEach((letter, index) => {
      if (letter === guess) {
        revealedWord[index] = guess;
      }
    });
    setMessage('Good guess!');
  } else {
    wrongGuesses.push(guess);
    remainingAttempts--;
    setMessage(`Incorrect guess! ${remainingAttempts} attempts left.`);
  }

  updateWordDisplay();
  updateWrongGuesses();
  checkGameStatus();
}


function checkGameStatus() {
  if (revealedWord.join('') === selectedWord) {
    setMessage('Congratulations! You guessed the word!');
    guessButton.disabled = true;
    guessInput.disabled = true;
  } else if (remainingAttempts <= 0) {
    setMessage(`Game Over! The word was "${selectedWord}".`);
    guessButton.disabled = true;
    guessInput.disabled = true;
  }
}


function initGame() {
  updateWordDisplay();
  updateWrongGuesses();
}


guessButton.addEventListener('click', handleGuess);


initGame();
