let humanScore = 0
let computerScore = 0
const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
const choice = Math.floor(Math.random() * choices.length);
return choices[choice];
}


function getHumanChoice() {
let userInput = prompt("Enter your choice(rock, paper or scissors):").toLowerCase();
if (choices.includes(userInput)) {
    return userInput; }
    else {
        console.log("invalid choice")
        return null;
    }
}

function checkWinner(humanSelection, computerSelection) {
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

function playRound() {
    const humanSelection = getHumanChoice();
    if (humanSelection === null) {
        console.log('Invalid, try again.')
        return;
    }
    const computerSelection = getComputerChoice();
    const result = checkWinner(humanSelection, computerSelection)
    if(result === "tie") {
        return "its a tie!"
    }
    else if(result === "human") {
        humanScore++;
        return `you win! ${humanSelection} beats ${computerSelection}`;
    }
    else if(result == "computer") {
        computerScore++;
        return `you lose! ${computerSelection} beats ${humanSelection}`
    }
}      

const buttons = document.getElementsByTagName("button").addEventListener(click, checkWinner(humanSelection, computerSelection));



