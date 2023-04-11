let randoVal = Math.floor(Math.random() * 3) + 1;
let cpu;
let cpuChoice;
let winner = 0;
let loser = 0;
let i;
let final = 0;
let result;
game();
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




function playRound(player, cpu) {
    if ((player === "rock") && (cpu === "paper")) {
        alert("You lose! Paper beats Rock");
        return result = -1;
    } else if ((player === "scissors") && (cpu === "rock")) {
        alert("You lose! Rock beats Scissors");
        return result = -1;
    } else if ((player === "paper") && (cpu === "scissors")) {
        alert("You lose! Scissors beats Paper");
        return result = -1;
    } else if (player === cpu) {
        alert("Tie game");
        return result = 0;
    }     else {
        alert("You win!");
        return result = 1;
    }
    final += result;
    console.log(final);
}

function game() {
    
    let player1 = prompt("Game begins!");
    let lower = player1.toLowerCase();
    let cpu1 = getComputerChoice();
    playRound(lower, cpu1);

}

function game() {
    let playerChoice;
for (i = 0; i > 5; i++) {
playerChoice = prompt("Game begins!").toLowerCase();
let cpuRoll = cpuFunc();
cpuFunc();
rounds(playerChoice, cpuRoll);
console.log(rounds());
return rounds();
}
}