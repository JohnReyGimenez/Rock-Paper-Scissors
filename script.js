let humanScore = 0
let computerScore = 0
const choices = ["rock", "paper", "scissors"]


function getComputerChoice() {
const choice = Math.floor(Math.random() * choices.length);
return choice;
}

function playRound(humanSelection, computerSelection) {
    const result = checkWinner(humanSelection, computerSelection)
    if(result == "tie") {
        return "its a tie!"
    }
    else if(result == "player") {
        return `you win! ${humanSelection} beats ${computerSelection}`;
    }
    else if(result == "computer") {
        return `you lose! ${computerSelection} beats ${humanSelection}`
    }
}      



function getHumanChoice() {
let userInput = prompt("Enter your choice(rock, paper or scissors):")
if (choices.includes(userInput)) {
    return userInput; }
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
     (humanSelection == "paper" && computerSelection == "scissors") ||
     (humanSelection == "scissors" && computerSelection == "rock") 
    ) {
    return "human";
    }
    else {
        return "computer";
    }
}

const humanSelection = "rock"
const computerSelection = getComputerChoice
console.log(playRound(humanSelection, computerSelection))

