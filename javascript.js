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
    let x = Math.random();
    return x; 
}

let compChoice = getComputerChoice();

let choice;

if (compChoice <= 0.33){
    choice = "Rock";
}

else if (compChoice > 0.33 && compChoice < 0.66) {
    choice = "Scissors";
}

else if (compChoice >= 0.66) {
    choice ="Paper";
}

console.log(compChoice);
console.log(choice);