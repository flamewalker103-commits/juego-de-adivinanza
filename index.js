const prompt = require('prompt-sync')({ sigint: true });

class GuessingGame {
    constructor(secretWord) {
        this.secretWord = secretWord;
        this.attempts = 5;
        this.clue = '';
    }

    setClue(clue) {
        this.clue = clue;
    }

    play() {
        console.log('Welcome to the Guessing Game!');
        console.log(`You have ${this.attempts} attempts to guess the word.`);
        console.log(`Clue: ${this.clue}`);

        while (this.attempts > 0) {
            let guess = prompt('Enter your guess (type "exit" to end the game): ');
            if (guess === 'exit') {
                console.log('You have exited the game.');
                return;
            }
            if (guess === this.secretWord) {
                console.log('Congratulations! You guessed the word.');
                return;
            } else {
                this.attempts--;
                console.log(`Incorrect. You have ${this.attempts} attempts left.`);
            }
        }
        console.log(`Game over. The word was: ${this.secretWord}`);
    }
}

const game = new GuessingGame('javascript');
game.setClue('It is a widely used programming language.');
game.play();