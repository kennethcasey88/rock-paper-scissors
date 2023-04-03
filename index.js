let i;
let playerChoice;
let results = 0;
let final = 0;
function cpuFunc(cpuChoice) {
    let randoVal = Math.floor(Math.random() * 3) + 1;
    if (randoVal === 1) {
        cpuChoice = "rock";
        return cpuChoice;
    } else if (randoVal === 2) {
        cpuChoice = "paper";
        return cpuChoice;
    } else if (randoVal === 3) {
        cpuChoice = "scissors";
        return cpuChoice;
    }
}
function game() {
for (i = 0; i < 5; i++) {
playerChoice = prompt("Game begins!").toLowerCase();
let cpuRoll = cpuFunc();
cpuFunc();
results = rounds(playerChoice, cpuRoll);

final += results;

}
if (final > 0) {
    console.log("You win");
} else if (final < 0) {
    console.log("You suck loser") 
} else {
    console.log("Tie game")
}
}

function rounds(player, cpu) {
    let result;
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
}
game();