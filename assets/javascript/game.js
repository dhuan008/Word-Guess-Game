// Game object
var wordGuessGame = {
    // Variables
    wordList: ["javascript", "functions", "float", "arrays", "strings"],
    answerChars: [],
    displayChars: [],
    wrongGuesses: [],
    playerInput: "",
    wins: 0,
    guesses: 12,

    // Gets the answer and stores each character into the aanswerChars array
    getWord: function () {
        this.answerChars = (this.wordList[Math.floor(Math.random() * this.wordList.length)]).split("");
        this.initGuesses();
    },

    // Helper function to initilize the current word display
    initGuesses: function () {
        this.displayChars.length = 0;
        for (var i = 0; i < this.answerChars.length; i++) {
            this.displayChars.push("_");
        }
        //console.log(this.answerChars);
        //console.log(this.displayChars);
    },

    // Checks if player guess is correct. Inside the answerChars array
    checkLetter: function (letter) {
        for (var i = 0; i < this.answerChars.length; i++) {
            if (letter == this.answerChars[i]) {
                return true; // return letter
            }
        }
        return false;
    }


};

// Page loaded main function
document.addEventListener("DOMContentLoaded", function (event) {

    // Gets the word to guess
    wordGuessGame.getWord();

    // On key press up
    document.onkeyup = function (event) {

        // If a letter is typed
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            wordGuessGame.playerInput = event.key.toLowerCase();
            //console.log(wordGuessGame.playerInput);

            //console.log(wordGuessGame.answerChars);

            //console.log(wordGuessGame.checkLetter(wordGuessGame.playerInput));
            if (wordGuessGame.checkLetter()) {

            }
        }


    }
});