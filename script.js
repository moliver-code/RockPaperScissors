let roundCounter = -1;
let playerScore = 0;
let computerScore = 0;

playerScoreDiv = document.querySelector('.playerScore')
computerScoreDiv = document.querySelector('.computerScore')

newDiv = document.createElement('div')
result = document.querySelector('.result')
result.appendChild(newDiv)
const endDiv = document.createElement('div')
endDiv.setAttribute('style','background-color: #9b9bf84d; color: #363687')
result.appendChild(endDiv)

function updateScores() {
    playerScoreDiv.textContent = `Player : ${playerScore}`;
    computerScoreDiv.textContent = `Computer : ${computerScore}`
    roundCounter += 1;
    if (roundCounter >= 5) {endGame()}
};
updateScores();

const rock = document.querySelector('#rock')
rock.addEventListener('click', e => game('rock'))

const paper = document.querySelector('#paper')
paper.addEventListener('click', e => game('paper'))

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', e => game('scissors'))

const choiceArray = ['rock', 'paper', 'scissors']

function computerPlay() {
    randomNumber = Math.floor(Math.random()*3);
    return choiceArray[randomNumber];
};

function playerPlay(selection) {
    newDiv.textContent(`selection is ${selection}`)
    if (selection === 'paper' || selection === 'scissors' || selection === 'rock' ) {
        return selection;
    }
    newDiv.textContent ='You mispelled something.';
};

function chooseRock(computerSelection, playerSelection) {
    if (computerSelection == 'scissors'){
        newDiv.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
        updateScores();
    }
    if (computerSelection == 'paper'){
        newDiv.textContent =`You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        updateScores()
    }
};

function choosePaper(computerSelection, playerSelection) {
    if (computerSelection == 'rock'){
        newDiv.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        updateScores()
    }
    if (computerSelection == 'scissors'){
        newDiv.textContent =`You Lose! ${playerSelection} beats ${computerSelection}`;
        computerScore++;
        updateScores()
    }
};

function chooseScissors(computerSelection, playerSelection) {
    if (computerSelection == 'paper'){
        newDiv.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        updateScores()
    }
    if (computerSelection == 'rock'){
        newDiv.textContent =`You Lose! ${playerSelection} beats ${computerSelection}`;
        computerScore++;
        updateScores()
    }
};
function gameDraw() {
    newDiv.textContent =`'It's a draw!`;
};

function playRound(computerSelection, playerSelection) { 
    if (computerSelection === playerSelection) {gameDraw()};
    if (playerSelection === 'rock') 
        {return chooseRock(computerSelection, playerSelection)};
    if (playerSelection === 'scissors') 
        {return chooseScissors(computerSelection, playerSelection)};
    if (playerSelection === 'paper') 
        {return choosePaper(computerSelection, playerSelection)};
}

function endGame() {
    console.clear()
    
    if (playerScore < computerScore) {
        endDiv.textContent = `You lose! You scored ${playerScore}, the computer scored ${computerScore}`;
    } else {
        endDiv.textContent = `You win! You scored ${playerScore}, the computer scored ${computerScore}`;
    }
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
}

function game(playerSelection) {
    if (roundCounter <5) {
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection) 
    } else {
        endGame();
    }
}
