let randoVal = Math.floor(Math.random() * 3) + 1;
function getComputerChoice() {
    if (randoVal === 2) {
        let cpu = "paper";
        return cpu;
    } else if (randoVal === 3) {
        let cpu = "scissors";
        return cpu;
    } else  {
       let cpu = "rock";
       return cpu;
    }
}
let cpuChoice = getComputerChoice();
let player = prompt("Rock, Paper or Scissors?");
let lower = player.toLowerCase();
function playRound(lower, cpuChoice) {
    let lose1 = ((lower === "rock") && (cpuChoice === "paper"));
    let lose2 = ((lower === "scissors") && (cpuChoice === "rock"));
    let lose3 = ((lower === "paper") && (cpuChoice === "scissors"));
    let draw = (lower === cpuChoice);
    let loser = 1;
    let winner = 1;
    if (lose1) {
        console.log("You lose! Paper beats Rock");
        return loser;
    } else if (lose2) {
        console.log("You lose! Rock beats Scissors");
        return loser;
    } else if (lose3) {
        console.log("You lose! Scissors beats Paper");
        return loser;
    } else if (draw) {
        console.log("Tie game");
    } else {
        console.log("You win!");
        return winner;
    }
}
console.log(playRound(lower, cpuChoice));