function getComputerChoice() {
const choices = ["rock", "paper", "scissors"]
const random = Math.floor(Math.random() * choices.length);
return choices[random]
}

function getHumanChoice() {
const choices = ["rock", "paper", "scissors"]
let userInput = prompt("Enter your choice(rock, paper or scissors):")
if (choices.includes(userInput)) {
    return userInput; }
    else {
        console.log("invalid choice")
        return null;
    }
}


