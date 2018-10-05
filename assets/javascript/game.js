// Create an array of words to be guessed
	
	var words = [
	"sympathetic", "curious", "hopeful", "confident", "eager", "giddy", "delighted", "surprised", "grateful", "amazed", "inspired", "thrilled", "amused", "calm", "content", "relaxed", "serene", "refreshed", "passionate", "emboldened"
	];

 // Pick a word from the word array at random
	
	var word = words[Math.floor(Math.random() * words.length)];
	
// Show the player an array of blank spaces standing for the letters in each word
	
	var answerArray = [];
	for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
	}
	var remainingLetters = word.length;
	
// Create a for loop for the game operations

	while (remainingLetters > 0) {
	// Show the player their progress
	alert(answerArray.join(" "));
	// Get a guess from the player
	var guess = prompt("Guess a letter, or click Cancel to stop 
   playing.");
	if (guess === null) {
    
// Exit the game loop????????????
	break;
	} else if (guess.length !== 1) {
	alert("Please enter a single letter.");
	} else {

// Update the player's progress with each guess
	for (var j = 0; j < word.length; j++) {
	if (word[j] === guess) {
	answerArray[j] = guess;
	remainingLetters--;
	}
	
// Show the answer???????
	alert(answerArray.join(" "));
	alert("Good job! The answer was " + word);

    
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");

// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

// Determines which key was pressed.
      var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Reworked our code from last step to use "else if" instead of lots of if statements.

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
          wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
          losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
          wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
          losses++;
        } else if (userGuess === computerGuess) {
          ties++;
        }

// Hide the directions
        directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
      }
    };
  </script>