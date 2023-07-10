let playerCounter = 0;
let compCounter = 0;

function getComputerChoice() {
  let compChoice = Math.random();

  if (compChoice <= 0.33) {
    choice = "rock";
  } else if (compChoice > 0.33 && compChoice < 0.66) {
    choice = "scissors";
  } else if (compChoice >= 0.66) {
    choice = "paper";
  }
  return choice;
}

function checkWinner (playerCounter,CompCounter){
	if (compCounter === 5){
  	console.log("You lose.");
  } else if (playerCounter === 5){
  	console.log("You win!");
  }
}

function score(){
	return "Player score: " + playerCounter + ", Computer score: " + compCounter;
}

function playRound(playerChoice) {
  let x;
  let choice = playerChoice.toLowerCase();
  let compChoice = getComputerChoice();
  
  if (compChoice === playerChoice){
  	x = "Tie";
  } 
  else if (choice === "scissors" && compChoice === "rock" || choice === "rock" && compChoice  === "paper" || choice === "paper" && compChoice === "scissors"){
  	x = "Lose";
    compCounter++;
    console.log("compcounter =" + compCounter);
  } 
  else if (choice === "rock" &&  compChoice === "scissors" || choice === "paper" && compChoice === "rock" || choice === "scissors" && compChoice === "paper"){
  	x = "Win";
    playerCounter++;
    console.log("playercounter =" + playerCounter);
  }
  checkWinner (playerCounter, compCounter);
  return x;
}


let container = document.getElementById("container");

let button1 = document.createElement("button");
button1.textContent = "Rock";
container.appendChild(button1);

let button2 = document.createElement("button");
button2.textContent = "Paper";
container.appendChild(button2);

let button3 = document.createElement("button");
button3.textContent = "Scissors";
container.appendChild(button3);

button1.addEventListener("click", function() {
  playerChoice = "rock";
  let round = playRound(playerChoice);
  let results = document.createElement("div");
  container.appendChild(results);
  results.textContent = score();
})

button2.addEventListener("click", function() {
  playerChoice = "paper";
  let round = playRound(playerChoice);
  let results = document.createElement("div");
  container.appendChild(results);
  results.textContent = score();
})

button3.addEventListener("click", function() {
  playerChoice = "scissors";
  let round = playRound(playerChoice);
  let results = document.createElement("div");
  container.appendChild(results);
  results.textContent = score();
})
