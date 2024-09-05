let humanScore = 0
let computerScore = 0
const choices = ["rock", "paper", "scissors"]


function getComputerChoice(computerSelection) {
const choice = Math.floor(Math.random() * choices.length);
return choices[choice];
}


function getHumanChoice() {
let userInput = prompt("Enter your choice(rock, paper or scissors):")
if (choices.includes(userInput)) {
    return humanSelection; }
    else {
        console.log("invalid choice")
        return null;
    }
}

function checkWinner() {
    if(humanSelection == computerSelection) {
        return "tie";
    }
    else if (
     (humanSelection == "rock" && computerSelection == "scissors") ||
     (humanSelection == "scissors" && computerSelection == "paper") ||
     (humanSelection == "paper" && computerSelection == "rock") 
    ) {
    return "human";
    }
    else {
        return "computer";
    }
}

function playRound(humanSelection, computerSelection) {
    getComputerChoice(computerSelection);
    getHumanChoice();
    const result = checkWinner(humanSelection, computerSelection)
    if(result == "tie") {
        return "its a tie!"
    }
    else if(result == "human") {
        humanScore++
        return `you win! ${humanSelection} beats ${computerSelection}`;
    }
    else if(result == "computer") {
        computerScore++
        return `you lose! ${computerSelection} beats ${humanSelection}`
    }
}      

function game() {
for (let i = 0; i < 4; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection))
}
}


