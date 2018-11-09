
// Organize the variables
// ============================================================================================
// words for the game
var word = [
    "chicago",
    "les miserables",
    "grease",
    "sweeney todd",
    "moulin rouge",
];

// holds the answer
var wordIndex = "";

// what letters have been chosen already
var wrongLetter = [];

// what letters make up the word
var rightLetter = [];

// length of the word
var blanks = 0;

// blank spaces that holds the letters that makes up the word
var blanksAndLetters = [];

// The variables that will keep track of all counters
var wins = 0;

var guesses = 6;


// the functions
// ============================================================================================

// FIRST ORDER OF OPERATION: Pressa key to start the game and make it that the 
document.onkeyup = function (game) {


    // SECOND ORDER OF OPERATIONS: Computer picks a word at random from word array 
    function game() {
        var wordIndex = wordIndex[Math.floor(Math.random() * word.length)];
        console.log(wordIndex);

        // breaks up the word into individual letters
        rightLetter = wordIndex.split("");
        console.log(rightLetter);

        // All the thanks to youTube and google for the next three parts, was struggling with how to generat the blank spaces. Would not of been able to remotely complete this project without it.

        // Store length of word in blanks

        blanks = rightLetter.length;
        console.log(blanks);

        // creating a for loop to generate the blank spots
        for (var l = 0; l < blanks; l++) {
            blanksAndLetters.push("_");
            console.log(blanksAndLetters);
        }

        // researched what joined and push meant. Again so much thanks to youTube for the expanations with visuals.

        // Link the blank spots to the html file
        document.getElementById("answer").innerHTML = "  " + blanksAndLetters.join("  ");

    }

    // THIRD ORDER OF OPERATION: Player chooses letter and it will either fill in the blanks or go to the wrong letter graveyard.

    function rightLetter(letter) {
        var rightLetter = false;

        // If the player chooses the right letter
        for (var l = 0; l < blanks; l++) {
            if (rightLetter[l] == letter) {
                rightLetter = true;
            }
        }

        // If the player chooses the wrong letter
        if (rightLetter) {
            for (var r = 0; r < blanks; r++) {
                if (rightLetter[r] == letter) {
                    blanksAndLetters[r] = letter;
                }
            }
        }

        // If the player does choose the wrong letter put the letter in the graveyard and take away one of the guesses

        else (wrongLetter.push(letter));
        guesses--;
        console.log(blanksAndLetters);
    }

    // FOURTH ORDER OF OPERATION: Results of the game, either player won or lost

    // math to calculate if the player won or lost
    function wordIndex() {

        console.log("wins:" + wins + "guessesRemaining:" + guesses);
        // If player wins
        if (rightLetter.toString() == blanksAndLetters.toString()) {
            wins++;

            document.getElementById("wins").innerHTML = " " + wins;
        }
        // If player looses
        else if (guesses === 0) { }


    }
};