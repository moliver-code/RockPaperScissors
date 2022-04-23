/*
I have tried to separate each component into its own function.
I am not completely happy with the alorithm that determines whether the player has won or lost.
I don't think it follows the DRY method.
Nor does the playRound function particularly.
*/

let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;
const choiceArray = ['rock', 'paper', 'scissors']

function computerPlay() {
    randomNumber = Math.floor(Math.random()*3);
    return choiceArray[randomNumber];
};

function playerPlay() {
    result = (prompt('Paper, scissors or rock?', '').toLowerCase());
    if (result === 'paper' || result === 'scissors' || result === 'rock' ) {
        return result;
    }
    alert('You mispelled something.');
    playerPlay1();
};

function chooseRock(computerSelection, playerSelection) {
    if (computerSelection == 'scissors'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true
    }
    if (computerSelection == 'paper'){
        console.log(`You Lose! ${playerSelection} beats ${computerSelection}`);
        return false
    }
};

function choosePaper(computerSelection, playerSelection) {
    if (computerSelection == 'rock'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true
    }
    if (computerSelection == 'scissors'){
        console.log(`You Lose! ${playerSelection} beats ${computerSelection}`);
        return false
    }
};

function chooseScissors(computerSelection, playerSelection) {
    if (computerSelection == 'paper'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return true
    }
    if (computerSelection == 'rock'){
        console.log(`You Lose! ${playerSelection} beats ${computerSelection}`);
        return false
    }
};
function gameDraw() {
    console.log(`'It's a draw!`);
    playRound();
};

function playRound() { //playerSelection, computerSelection
    // determine winner with switch statement?
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    if (computerSelection === playerSelection) {gameDraw()};
    if (playerSelection === 'rock') {return chooseRock(computerSelection, playerSelection)};
    if (playerSelection === 'scissors') {return chooseScissors(computerSelection, playerSelection)};
    if (playerSelection === 'paper') {return choosePaper(computerSelection, playerSelection)};
}

function endGame() {
    if (playerScore < computerScore) {
        console.log(`You lose! You scored ${playerScore}, the computer scored ${computerScore}`);
    } else {
        console.log(`You win! You scored ${playerScore}, the computer scored ${computerScore}`);
    }
}

function game() {
    while (roundCounter <5) {
        roundCounter += 1;
        playRound() ? (playerScore += 1) : (computerScore += 1);
    };
    endGame();
}
game();
