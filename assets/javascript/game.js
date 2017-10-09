var words = [
    ["T", "R", "E", "E", "H", "O", "U", "S", "E"],
    ["J","A","V","A","S","C","R","I","P","T"],
    ["W","E","B","D","E","S","I","G","N"],
    ["E","D","U","C","A","T","I","O","N"],
    ["C","H","O","C","O","L","A","T","E"],
    ["G","E","R","M","A","N","Y"]
]
var random = Math.floor((Math.random()*(words.length-1)));

var randomWord = words[random]; // the word to guess will be chosen from the array above
var guessField = new Array(randomWord.length);
var error = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < guessField.length; i++){
    guessField[i] = "_";
}

// prints the guessfield
function printGuessField(){
    for (var i = 0; i < guessField.length; i++){
        var rateField = document.getElementById("rateField");
        var letter = document.createTextNode(guessField[i]);
        rateField.appendChild(letter);
    }
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkMeCharacter = function(){
    var f = document.rateFormula;
    var b = f.elements["rateCharacter"];
    var character = b.value; // the letter provided by the user
    character = character.toUpperCase();
    for (var i = 0; i < randomWord.length; i++){
        if(randomWord[i] === character){
            guessField[i] = character + " ";
            var hit = true;
        }
        b.value = "";
    }

    //deletes the guessfield and replaces it with the new one
    var rateField = document.getElementById("rateField");
    rateField.innerHTML="";
    printGuessField();

    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if(!hit){
        var generateLetters = document.getElementById("generateLetters");
        var letter = document.createTextNode(" " + character);
        generateLetters.appendChild(letter);
        error++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
    }

    //checks if all letters have been found
    var finished = true;
    for (var i = 0; i < guessField.length; i++){
        if(guessField[i] === "_ "){
            finished = false;
        }
    }
    if(finished){
        window.alert("May the Force Be With You!");
    }



    //Picture of JAba
    //once you got six wrong letters, you lose
    if(error === 6){
        window.alert("Throw them into the pit!");
    }
};

window.onload = init;
















