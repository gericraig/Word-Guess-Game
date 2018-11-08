
// the variables 
// ============================================================================================
// words for the game

var word = [
    "chicago",
    "les miserables",
    "grease",
    "sweeney todd",
    "moulin rouge",
]

// win count
var win = 0;

// holds the word
var wordIndex = 0;

// how many guesses the player has left
var letterIndex = 10;

// what letters have been chosen already
var lettersChosen

// the functions 
// ============================================================================================

// function to render question
function renderQuestion() {
    if (wordIndex <= (word.length - 1)) {
        document.querySelector("#word").innerHTML = word[wordIndex].w;
    }

    else {
        document.querySelector("#word").innerHTML = "Shows Over!";
        document.querySelector("#win count").innerHTML = "Final Score: " + score + " out of " + word.length;
    }
}

// function to choose the letter
document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        score++;
    }
    else
        lettersIndex--;
}

document.getElementById('wins').innerHTML = "win: " + wins;
document.getElementById('guesses').innerHTML = "letters: " + letterIndex;









