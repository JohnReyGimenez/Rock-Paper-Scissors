let humanScore = 0
let computerScore = 0
const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
const choice = Math.floor(Math.random() * choices.length);
return choices[choice];
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

function playRound(humanSelection) {
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

function updateScore() {
    const scoreDiv = document.getElementById("results");
    scoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

const buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function() {
        const humanSelection = button.id; // gets choice from buttons id
        const resultMessage = playRound(humanSelection);
          // Update the result and score in the HTML
          document.getElementById('score').textContent = resultMessage;
          updateScore();
    })
}


