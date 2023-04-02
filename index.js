let randoVal = Math.floor(Math.random() * 3) + 1;
let cpu;
let winner;
let loser;
getComputerChoice();
function getComputerChoice() {
    if (randoVal === 2) {
        cpu = "paper";
        return cpu;
    } else if (randoVal === 3) {
        cpu = "scissors";
        return cpu;
    } else  {
       cpu = "rock";
       return cpu;
    }
}
let cpuChoice = getComputerChoice();
let player = prompt("Rock, Paper or Scissors?");

let lower = player.toLowerCase();
console.log(lower);
    console.log(cpuChoice);
playRound(lower, cpuChoice);
function playRound(player, cpu) {
    console.log(player);
    console.log(getComputerChoice());
    if ((player === "rock") && (cpu === "paper")) {
        alert("You lose! Paper beats Rock");
        return loser;
    } else if ((player === "scissors") && (cpu === "rock")) {
        alert("You lose! Rock beats Scissors");
        return loser;
    } else if ((player === "paper") && (cpu === "scissors")) {
        alert("You lose! Scissors beats Paper");
        return loser;
    } else if (player === cpu) {
        alert("Tie game");
    }     else {
        alert("You win!");
        return winner;
    }
}