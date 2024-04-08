const words = ['javascript', 'hangman', 'programming', 'computer', 'internet'];
let selectedWord = '';
let guessedLetters = [];
const maxAttempts = 6;
let attemptsLeft = maxAttempts;

// Initialize game
function initGame() {
    // Reset variables
    guessedLetters = [];
    attemptsLeft = maxAttempts;

    // Select a random word from the words array
    selectedWord = words[Math.floor(Math.random() * words.length)];

    // Display underscores for each letter in the word
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';
    for (let i = 0; i < selectedWord.length; i++) {
        const underscore = document.createElement('span');
        underscore.textContent = '_';
        wordContainer.appendChild(underscore);
    }

    // Display alphabet letters for user to guess
    const lettersContainer = document.getElementById('lettersContainer');
    lettersContainer.innerHTML = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabet) {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        letterElement.textContent = letter;
        letterElement.addEventListener('click', () => guessLetter(letter));
        lettersContainer.appendChild(letterElement);
    }

    // Update attempts left
    updateAttempts();
}

// Function to handle letter guesses
function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        const wordContainer = document.getElementById('wordContainer');
        let wordRevealed = '';
        for (let char of selectedWord) {
            if (guessedLetters.includes(char)) {
                wordRevealed += char;
            } else {
                wordRevealed += '_';
            }
        }
        wordContainer.innerHTML = wordRevealed.split('').join(' ');

        // Check if the word is fully revealed
        if (!wordRevealed.includes('_')) {
            showMessage('Congratulations! You won!');
        }
    } else {
        showMessage('You already guessed that letter!');
    }

    // Update attempts left
    updateAttempts();
}

// Function to update attempts left and check for game over
function updateAttempts() {
    const attemptsElement = document.getElementById('attemptsLeft');
    attemptsElement.textContent = `Attempts left: ${attemptsLeft}`;

    if (!selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
        attemptsLeft--;
        if (attemptsLeft === 0) {
            showMessage(`Game over! The word was "${selectedWord}".`);
        }
    }
}

// Function to display messages to the user
function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

// Start the game when the page loads
window.onload = initGame;