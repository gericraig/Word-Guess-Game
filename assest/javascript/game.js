
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

// holds the answer
var wordIndex = "";

// what letters have been chosen already
var wrongLetter = []

// what letters make up the word
var rightLetter = []

// length of the word
var blanks = 0;

// blank spaces that holds the letters that makes up the word
var blanksAndLetters = [];

// The variables that will keep track of all counters
var wins = 0;

var guessesRemaining = 9;


// the functions
// ============================================================================================

// FIRST ORDER OF OPERATION: Pressa key to start the game


// SECOND ORDER OF OPERATIONS: Computer picks a word at random from word array 
function game() {
    var wordIndex = word[Math.floor(Math.random() * word.length)];
    console.log(wordIndex)

    // breaks up the word into individual letters
    rightLetters = wordIndex.split("");
    console.log(rightLetters)

    // All the thanks to youTube and google for the next three parts, was struggling with how to generat the blank spaces. Would not of been able to remotely complete this project without it.

    // Store length of word in blanks

    blanks = rightLetters.length;
    console.log(blank)

    // creating a for loop to generate the blank spots
    for (var i = 0; i < blanks; i++) {
        blanksAndLetters.push("_");
        console.log(blanksAndLetters)
    }

    // researched what joined and push meant. Again so much thanks to youTube for the expanations with visuals.

    // Link the blank spots to the html file
    document.getElementById("answer").innerHTML = "  " + blanksAndCorrect.join("  ");

}

// THIRD ORDER OF OPERATION: Player chooses letter and fills in the blamks












// function to render a word and answer
function renderWord() {
    for (var i = 0; i < word.length; i++) {
        wordIndex[i] = "_";
    }

    a = wordIndex.join(" ");
    document.getElementById("answer").innerHTML = a;
}

// selected letters are put into the correct word position 

function Letter() {
    var letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                answer[i] = letter;
            }
        }

        count++;
        document.getElementById("counter").innerHTML = "Number of clicks " + count;
        document.getElementById("answer").innerHTML = word.join(" ");

        document.getElementById("letter").value = "";
    }



    // (wordIndex <= (word.length - 1)) {
    //     document.querySelector("#word").innerHTML = word[wordIndex].w;
    // }




    // else {
    //     document.querySelector("#word").innerHTML = "Shows Over!";
    //     document.querySelector("#win count").innerHTML = "Final Score: " + score;
    // }

    // To set up the blank spaces for the answer

    //     for (var i = 0; i < word.length; i++) {
    //         word[i] = "_";
    //     }




    //     w = answerArray.join(" ");
    //     document.getElementById("answer").innerHTML = w;
    // }

    // function Letter() { }

}
}
}
