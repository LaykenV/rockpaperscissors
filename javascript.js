const container = document.querySelector("#container");
function computerPlay() {
    let i = Math.random() * 100;
    if(i <= 33) {
        return "Rock";
    }
    else if(i >= 66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
    
let computerSelection = computerPlay();


const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

let playerScore = 0;
let compScore = 0;

function round(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return results.textContent = "Tie! You both chose rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        compScore++;
        return results.textContent = "You lose! Paper beats Rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        return results.textContent = "You win! Rock beats Scissors.";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        return results.textContent = "You win! Paper beats Rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "Paper") {
        return results.textContent = "Tie! You both chose Paper.";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        compScore++;
        return results.textContent = "You lose! Scissors beats Paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        compScore++;
        return results.textContent = "You lose! Rock beats Scissors";
    }
    else if(playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        return results.textContent = "You win! Scissors beats Paper.";
    }
    else if(playerSelection == "scissors" && computerSelection == "Scissors") {
        return results.textContent = "Tie! You both chose Scissors.";
    }
    else { return results.textContent = "Please enter Rock Paper or Scissors";}
}

function gameend(playerscore, compscore) {
    if (playerScore == 5) {
        alert("You have reached a score of 5! You win! The game will restart now."), window.location.reload();
    }
    else if(compScore == 5) {
        alert("The computer has reached a score of 5! You Lose! The game will restart now."), window.location.reload();
    }
}




rockbtn.addEventListener("click", () => {
    const playerSelection = "rock";
    round(playerSelection, computerPlay());
    scoreCount.textContent = `Player score: ${playerScore}`;
    scoreCount2.textContent = `Computer score: ${compScore}`;
    gameend(playerScore, compScore);
});

paperbtn.addEventListener("click", () => {
    const playerSelection = "paper";
    round(playerSelection, computerPlay());
    scoreCount.textContent = `Player score: ${playerScore}`;
    scoreCount2.textContent = `Computer score: ${compScore}`;
    gameend(playerScore, compScore);
});

scissorsbtn.addEventListener("click", () => {
    const playerSelection = "scissors";
    round(playerSelection, computerPlay());
    scoreCount.textContent = `Player score: ${playerScore}`;
    scoreCount2.textContent = `Computer score: ${compScore}`;
    gameend(playerScore, compScore);
});


const scoreCount = document.createElement("div");
scoreCount.classList.add("score")
scoreCount.textContent = `Player score: ${playerScore}`;

const results = document.createElement("div");
results.classList.add("results")
results.textContent = "First to 5 wins!";

const scoreCount2 = document.createElement("div");
scoreCount2.classList.add("score");
scoreCount2.textContent = `Computer score: ${compScore}`;



container.appendChild(scoreCount);
container.appendChild(results);
container.appendChild(scoreCount2);


