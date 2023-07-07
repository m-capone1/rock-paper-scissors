function getComputerChoice () {
    let compChoice = Math.random();

    if (compChoice <= 0.33){
        choice = "rock";
    }else if (compChoice > 0.33 && compChoice < 0.66) {
        choice = "scissors";
    }else if (compChoice >= 0.66) {
        choice = "paper";
    } return choice;
}

function playRound (compChoice, playerChoice) {
    let x = undefined; 
    let choice = playerChoice.toLowerCase();
    
    if (choice === "scissors") {
        if (compChoice === "scissors") {
            x = "Tie";
        }else if (compChoice === "rock") {
            x = "Lose";
        }else {
            x = "Win";
        }return x;
        
    }else if (choice === "paper") {
        if (compChoice === "scissors") {
            x = "Lose";
        }else if (compChoice === "rock") {
            x = "Win";
        }else {
            x = "Tie";
        }return x;
        
    }else if (choice === "rock") {
        if (compChoice === "scissors") {
            x = "Win";
        }else if (compChoice === "rock") {
            x = "Tie";
        }else {
            x = "Lose";
        }return x;
    }
}

let compChoice = getComputerChoice();


let button1 = document.createElement("button1");
button1.textContent = "Rock";
document.appendChild(button1);

let button2 = document.createElement("button2");
button2.textContent = "Paper";
document.appendChild(button2);

let button3 = document.createElement("button3");
button3.textContent = "Scissors";
document.appendChild(button3);

button1.addEventListener("click", function(compChoice){
    playerChoice = "Rock";
    playerRound(compChoice,playerChoice);
})

button2.addEventListener("click", function(compChoice){
    playerChoice = "Paper";
    playerRound(compChoice,playerChoice);
})

button3.addEventListener("click", function(compChoice){
    playerChoice = "Scissors";
    playerRound(compChoice,playerChoice);
})

