const guessButton = document.getElementById('guess-button');
const initGameButton = document.getElementById('init-game-button');

const words = ['milk', 'jump', 'card', 'rock'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let revealedWord = '_'.repeat(selectedWord.length).split('');
let wrongGuesses = [];
let remainingAttempts = 4;


function updateWordDisplay() {
  document.querySelector('.word').textContent = revealedWord.join(' ');
}

function updateWrongGuesses() {
  document.querySelector('.wrong-guesses').textContent = `Wrong Guesses: ${wrongGuesses.join(', ')}`;
}

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}


function handleGuess() {
  const guess = document.getElementById('guess-input').value.toLowerCase();
  document.getElementById('guess-input').value = ''; 

  if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
    setMessage('Please enter a valid letter!');
    return;
  }

  if (revealedWord.includes(guess) || wrongGuesses.includes(guess)) {
    setMessage('You already guessed that!');
    return;
  }

  if (selectedWord.includes(guess)) {
    selectedWord.split('').forEach((letter, index) => {
      if (letter === guess) revealedWord[index] = guess;
    });
    setMessage('Good guess!');
  } else {
    wrongGuesses.push(guess);
    remainingAttempts--;
    setMessage(`Incorrect! ${remainingAttempts} tries left.`);
  }

  updateWordDisplay();
  updateWrongGuesses();
  checkGameStatus();
}


function checkGameStatus() {
  if (revealedWord.join('') === selectedWord) {
    setMessage('You guessed it!');
    guessButton.disabled = true;
  } else if (remainingAttempts <= 0) {
    setMessage(`Game Over! The word was "${selectedWord}".`);
    guessButton.disabled = true;
  }
}


function initGame() {
  revealedWord = '_'.repeat(selectedWord.length).split('');
  wrongGuesses = [];
  remainingAttempts = 4;
  selectedWord = words[Math.floor(Math.random() * words.length)];
  
  updateWordDisplay();
  updateWrongGuesses();
  setMessage('');
  
  guessButton.disabled = false;
}


guessButton.addEventListener('click', handleGuess);
initGameButton.addEventListener('click', initGame);


initGame();
 