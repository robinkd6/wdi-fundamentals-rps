////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    var randomNumber = Math.random();
    if (move === randomNumber) {
        return  randomNumber;
    } else {
        return move || getInput();
    }
}

function getComputerMove(move) {
    if (move === randomNumber) {
        return  randomNumber;
    } else {
        return move ||randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === computerMove) {
        return 'tie';
    } else if(playerMove === 'rock') {
        if(computerMove === 'scissors') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } else if(playerMove === 'scissors') {
        if(computerMove === 'paper') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
        } 
return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

