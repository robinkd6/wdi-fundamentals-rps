////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    
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
    
        return move || getInput();
}

function getComputerMove() {
 
        return randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if(playerMove === computerMove) {
        winner = "tie";
        console.log("We have a tie!");
        return winner;
    } else if(playerMove === 'rock') {
        if(computerMove === 'scissors') {
            winner = 'player';
            console.log("Player wins!");
            return winner;
        } else {
            winner = 'computer';
            console.log("Computer wins!");
            return winner;
        }
    } else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            winner = 'player';
            console.log("Player wins!");
            return winner;
        } else {
            winner = 'computer';
            console.log("Computer wins!");
            return winner;
        }
    } else if(playerMove === 'scissors') {
        if(computerMove === 'paper') {
            winner = 'player';
            console.log("Player wins!");
            return winner;
        } else {
            winner = 'computer';
            console.log("Computer wins!");
            return winner;
        }
        } 
return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5 ) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins += 1;
        } else {
            computerWins += 1;
        }
        console.log("Your move was " + playerMove + " while the Computer's move was " + computerMove + ".");
        }
    if (playerwins === 5) {
        console.log("Woot! You win!");
    } else {
        console.log("Congra---Actually, you lost!");
    }
}
 }   
    return [playerWins, computerWins];
}

