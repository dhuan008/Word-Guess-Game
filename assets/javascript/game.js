// Game object
var wordGuessGame = {
    // Variables
    wordList: ["javascript", "functions", "float", "arrays", "strings"],
    answerChars: [],
    displayChars: [],
    alreadyGuessed: [],
    playerInput: "",
    wins: 0,
    guesses: 12,

    // Initializes game
    gameStart: function () {
        this.getWord();
        this.initGuesses();
        this.writeWins();
        this.updateDisplay();
    },

    // Resets variables for next game
    resetEndGame: function () {
        this.answerChars.length = 0;
        this.displayChars.length = 0;
        this.alreadyGuessed.length = 0;
        this.playerinput = "";
        this.guesses = 12;
    },

    checkEndGame: function () {
        if (this.loseGame()) {
            this.restartGame();
        }
        else if (this.winGame()) {
            this.incrementWins();
            this.restartGame();
        }
    },

    restartGame: function () {
        this.resetEndGame();
        this.gameStart();
    },

    loseGame: function () {
        if (this.guesses == 0) {
            return true;
        }
        return false;
    },

    // Checks if you won by comparing arrays turned into strings
    winGame: function () {
        if (this.displayChars.toString() == this.answerChars.toString()) {
            return true;
        }
        return false;
    },

    // Gets the answer and stores each character into the answerChars array
    getWord: function () {
        this.answerChars = (this.wordList[Math.floor(Math.random() * this.wordList.length)]).split("");
    },

    // Helper function to initilize the current word display to _
    initGuesses: function () {
        this.displayChars.length = this.answerChars.length;
        for (var i = 0; i < this.answerChars.length; i++) {
            this.displayChars[i] = "_";
        }
        this.writeCurrentWord();
    },
    /*
        // Checks if player guess is correct. Inside the answerChars array
        checkLetter: function (letter) {
            for (var i = 0; i < this.answerChars.length; i++) {
                if (letter == this.answerChars[i]) {
                    return true; // return letter
                }
            }
            return false;
        },
    */
    // Updates ingame display
    updateDisplay: function () {
        this.updateCurrentWord();
        this.writeNumGuesses();
        this.updateLettersGuessed();
    },

    // Updates the current word guesses
    updateCurrentWord: function () {
        for (var i = 0; i < this.answerChars.length; i++) {
            if (this.answerChars[i] == this.playerInput) {
                this.displayChars[i] = this.playerInput;
                //console.log(this.displayChars);
            }
        }
        this.writeCurrentWord();
    },

    updateLettersGuessed: function () {
        this.alreadyGuessed.push(this.playerInput);
        this.writeAlreadyGuessed();
    },

    // Changes the html page for current word
    writeCurrentWord: function () {
        document.getElementById("cWord").textContent = this.displayChars.join(" ");
    },

    // Changes the html page for remaining guesses
    writeNumGuesses: function () {
        document.getElementById("numGuesses").textContent = this.guesses;
    },

    // Changes the html page for letters already guessed
    writeAlreadyGuessed: function () {
        document.getElementById("alreadyGuessed").textContent = this.alreadyGuessed.join(" ");
    },

    // Changes the html page for number of wins
    writeWins: function () {
        document.getElementById("score").textContent = this.wins;
    },

    // Reduces the number of guesses remaining by one
    decrementGuesses: function () {
        this.guesses--;
    },

    // Adds the number of wins by one
    incrementWins: function () {
        this.wins++;
    }


};

// Page loaded main function
document.addEventListener("DOMContentLoaded", function (event) {

    // Starts the game
    wordGuessGame.gameStart();

    // On key press up
    document.onkeyup = function (event) {

        // If a letter is typed
        if (event.keyCode >= 65 && event.keyCode <= 90) {

            // Set player input equal to the lowercase input
            wordGuessGame.playerInput = event.key.toLowerCase();
            wordGuessGame.decrementGuesses();

            wordGuessGame.updateDisplay();
            wordGuessGame.checkEndGame();
        }


    }
});