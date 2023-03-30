/*Javascript*/
/*Pseudocode
Ask user to choose either rock, paper, or scissors 
    User chooses options
Computer generates random rock, paper, scissors choice
Comapre user input to computer input 
If user chooses rock
    If computer chose rock: Tie 
    If computer chose paper: computer wins 
    If computer chose scissors: user wins
     Record score.   
If user chooses paper 
    If computer chose rock: user wins 
    If computer chose paper: tie
    If computer chose scissors: computer wins
     Record score.   
If user chooses scissors
    If computer chose rock: Tie 
    If computer chose paper: computer wins 
    If computer chose scissors: user wins
    Record score.   
*/


function getComputerChoice () {
    let compChoice = Math.random();

    if (compChoice <= 0.33){
        choice = "rock";
    }
    
    else if (compChoice > 0.33 && compChoice < 0.66) {
        choice = "scissors";
    }
    
    else if (compChoice >= 0.66) {
        choice = "paper";
    } 
    return choice;
}

function playRound (compChoice, playerChoice) {
    let x = undefined; 
    let choice = playerChoice.toLowerCase();
    
    if (choice === "scissors") {
        if (compChoice === "scissors") {
            x = "Tie";
        }
        else if (compChoice === "rock") {
            x = "Lose";
        }
        else {
            x = "Win";
        }
        return x;
    }

    else if (choice === "paper") {
        if (compChoice === "scissors") {
            x = "Lose";
        }
        else if (compChoice === "rock") {
            x = "Win";
        }
        else {
            x = "Tie";
        }
        return x;
    }

    else if (choice === "rock") {
        if (compChoice === "scissors") {
            x = "Win";
        }
        else if (compChoice === "rock") {
            x = "Tie";
        }
        else {
            x = "Lose";
        }
        return x;
    }

}

function gameResult (result) {
    if (result === "Win"){
        alert("You win!");
    }

    else if (result === "Lose"){
        alert("You lose!");
    }

    else if (result ==="Tie"){
        alert("Tie!");
    }
}

function game () {
    let winCounter = 0;
    let numberOfGames = 5;

    for (let i = 0; i < numberOfGames; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let compChoice = getComputerChoice();
        let countgame = playRound(compChoice, playerChoice);

        let result = gameResult(countgame);
        console.log (result);

        if (countgame === "Win"){
            winCounter++;
        }
    }
    console.log(winCounter);
    return winCounter;
}

let runGame = game();


