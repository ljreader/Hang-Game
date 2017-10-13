var wordList = [
    ["T", "R", "E", "E", "H", "O", "U", "S", "E"],
    ["J","A","V","A","S","C","R","I","P","T"],
    ["W","E","B","D","E","S","I","G","N"],
    ["E","D","U","C","A","T","I","O","N"],
    ["C","H","O","C","O","L","A","T","E"],
    ["G","E","R","M","A","N","Y"]
];


var random = Math.floor((Math.random()*(wordList.length-1)));

var word = wordList[random]; // the word to guess will be chosen from the array above
var wordLength = new Array(word.length);
var letterNotInWord = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < wordLength.length; i++){
    wordLength[i] = "_ ";
}

// prints the guessfield
function printwordLength(){
    for (var i = 0; i < wordLength.length; i++){
        var inputField = document.getElementById("inputField");
        var letter = document.createTextNode(wordLength[i]);
        inputField.appendChild(letter);
    }
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkCharacter = function(){
    var f = document.selectionContainer;
    var b = f.elements["letterBox"];
    var character = b.value; // the letter provided by the user
    character = character.toUpperCase();
    for (var i = 0; i < word.length; i++){
        if(word[i] === character){
            wordLength[i] = character + " ";
            var click = true;
        }
        b.value = "";
    }

    //deletes the guessfield and replaces it with the new one
    var inputField = document.getElementById("inputField");
    inputField.innerHTML="";
    printwordLength();

    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if(!click){
        var wrongLetters = document.getElementById("wrongLetters");
        var letter = document.createTextNode(" " + character);
        wrongLetters.appendChild(letter);
        letterNotInWord++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + letterNotInWord + ".png";
    }

    //checks if all letters have been found
    var finished = true;
    for (var i = 0; i < wordLength.length; i++){
        if(wordLength[i] === "_ "){
            finished = false;
        }
    }
    if(finished){
        window.alert("May The Force Be With You!");
    }

    //once you got six wrong letters, you lose
    if(letterNotInWord === 6){
        window.alert("Vader Has Truly Won!");
    }
};

function init(){
    printwordLength();
}

window.onload = init;
















