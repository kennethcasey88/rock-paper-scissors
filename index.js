let i;
let playerChoice;
let results = 0;
let final = 0;
let userScore = 0;
let cpuScore = 0;
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scisBtn = document.querySelector('#scisBtn');
const user = document.querySelector('#user');
const computer = document.querySelector('#computer');
const message = document.querySelector('#message');

rockBtn.addEventListener('click', () => rounds('rock', cpuFunc()));
paperBtn.addEventListener('click', () => rounds('paper', cpuFunc()));
scisBtn.addEventListener('click', () => rounds('scissors', cpuFunc()));

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


function rounds(player, cpu) {
    let result = 0;
    if ((player === "rock") && (cpu === "paper")) {
        
        result = -1;
        scoreKeeper(result);
    } else if ((player === "scissors") && (cpu === "rock")) {
        
        result = -1;
        scoreKeeper(result);
    } else if ((player === "paper") && (cpu === "scissors")) {
        
        result = -1;
        scoreKeeper(result);
    } else if (player === cpu) {
        
        result = 0;
        scoreKeeper(result);
    }     else {
        
        result = 1;
        scoreKeeper(result);
    }
}

function scoreKeeper(data) {
        if (data < 0) {
            computer.textContent = ++cpuScore;
            document.getElementById("message").style.color = "red";
            message.textContent = "YOU LOSE THE ROUND LOL!";
        } else if (data > 0) {
            user.textContent = ++userScore;
            document.getElementById("message").style.color = "green";
            message.textContent = "YOU WIN THE ROUND!";
        } else {
            document.getElementById("message").style.color = "yellow";
            message.textContent = "DRAW!";
        }

        if (cpuScore == 5) {
            document.getElementById("message").style.color = "red";
            message.textContent = "GAME OVER LOSER HAHAHAHA!";
            userScore = 0;
            cpuScore = 0;
            user.textContent = userScore;
            computer.textContent = cpuScore;
        } else if (userScore == 5) {
            document.getElementById("message").style.color = "green";
            message.textContent = "YOU WIN THE GAME" ;
            userScore = 0;
            cpuScore = 0;
            user.textContent = userScore;
            computer.textContent = cpuScore;
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