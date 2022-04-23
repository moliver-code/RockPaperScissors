/*
function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
Write a function that plays a single round of Rock Paper Scissors.
 two parameters 
 playerSelection (non-case sensitive) 
 computerSelection
return string: "You Lose! <Paper> beats <Rock>"

template code block
function playRound(playerSelection, computerSelection) {
  // your code here!
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

NEW function called game() that calls playRound

computerPlay() - 

input: playerSelection - case insensitive, string, fails if not rock, paper or scissors

output - 
roundOutcome "You <Lose>! <Paper> beats <Rock>" - each game
finalOutcome "you won <x> games, the computer won <y> games, <you> win!"

algo - 
init roundCounter to 0;
init userScore, computerScore,
limit round counter to 5 - if 5, display final outcome message
takes input and converts to lowercase;
invoke game function
generates random number to select computer output;
compares user input against computer output;
updates userScore, computerScore;
outputs roundOutcome;
invoke game function unless roundCounter >=5;
output finalOutcome
*/

