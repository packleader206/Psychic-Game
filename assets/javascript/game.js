//Javascript for Psychic-Game

//Create alphabet array of keyboard choices
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
                        "v", "w", "x", "y", "z",];

//Removed this because I realized I could just define one Array, since they are both the same
//var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
//                       "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
//                        "v", "w", "x", "y", "z"];


//Realized I didn't need this array after setting it up
// var guessesLeft = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];

//create variables to hold # of wins, losses & guess count -- wins & losses start at 0; number of guesses left starts at 10
var wins = 0;
var losses = 0;
var guessesLeft = 10;

//create empty array variable to log user's guesses so far
var guessesSoFar = [];

//create variables referencing the places in HTML where we want to display
var W = document.getElementById("winsText");
var L = document.getElementById("lossesText");
var GL = document.getElementById("guessesLeftText");
var GSF = document.getElementById("guessesSoFarText");
var hint = document.getElementById("hintText");

//function runs when user presses a key
document.onkeyup = function(event) {
    
    //user selection - convert to lower case
    var userGuess = event.key.toLowerCase();
    
    //computer selection randomly generated referencing the data in the 'choices' array
    var computerGuess = choices[Math.floor(Math.random() * choices.length)];

    //logic
    if (choices.indexOf(userGuess) < 26) {

      if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
      }

      if (userGuess != computerGuess) {
        guessesLeft--;
        guessesSoFar.push(userGuess);
      }
      
      if (guessesLeft === 0) {
        guessesLeft = 10;
        losses++;
        guessesSoFar = [];
      }

      //Hide the hint
      hint.textContent = "";

      //Displays the results onto the HTML page
      W.textContent = "Wins: " + wins;
      L.textContent = "Losses: " + losses;
      GL.textContent = "Guesses Left " + guessesLeft;
      GSF.textContent = "Your Guesses so far: " + guessesSoFar.join(", ");
    }
};


