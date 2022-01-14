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
    
const playerSelection = window.prompt("choose your weapon").toLowerCase();
function promptAgain() {
    return window.prompt("choose your weapon").toLowerCase();
}
const computerSelection = computerPlay();



function round(computerPlay(), ) {
    
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "Tie! You both chose rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors.";
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Tie! You both chose Paper.";
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats Paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors";
    }
    else if(playerSelection == "scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats Paper.";
    }
    else if(playerSelection == "scissors" && computerSelection == "Scissors") {
        return "Tie! You both chose Scissors.";
    }
    else { return "Please enter Rock Paper or Scissors";}
}


roundresult = round(playerSelection, computerSelection);
playerscore = 0;
compscore = 0;

function game(roundresult) {
    
    if (roundresult == "You lose! Paper beats Rock." || "You lose! Scissors beats Paper." || "You lose! Rock beats Scissors") {
        return (compscore++);
    }
    else if (roundresult == "You win! Scissors beats Paper." || "You win! Paper beats Rock." || "You win! Rock beats Scissors.") {
        return (playerscore++);
    }
    else {return "error";}
}





function gameend(playerscore, compscore) {
    if (playerscore == 5) {
        console.log ("You have reached a score of 5! You win!");
    }
    else if(compscore == 5) {
        console.log ("The computer has reached a score of 5! You Lose!");
    }
}

console.log(round(playerSelection, computerSelection));
game(roundresult);
console.log(`Your score is ${playerscore}`);
console.log(`The computers score is ${compscore}`)

for (let i = 0; i < 9; i++) {
    round(promptagain(playerSelection), computerPlay()), game(roundresult), console.log(round(playerSelection, computerSelection)), console.log(`Your score is ${playerscore}`), console.log(`The computers score is ${compscore}`);
}




