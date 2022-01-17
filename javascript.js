
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
    


function playerplay() {
    return window.prompt("choose your weapon").toLowerCase();
}

let computerSelection = computerPlay();
let playerSelection = playerplay();



function round(playerSelection, computerSelection) {
    
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


let roundresult = round(playerSelection, computerSelection);
playerscore = 0;
compscore = 0;

function gameresult(roundresult) {
    if (roundresult == ("You lose! Paper beats Rock.") || roundresult == ("You lose! Scissors beats Paper.") || roundresult == ("You lose! Rock beats Scissors")) {
        return (compscore++);
    }
    else if (roundresult === ("You win! Scissors beats Paper.") || roundresult == ("You win! Paper beats Rock.") || roundresult == ("You win! Rock beats Scissors.")) {
        return (playerscore++);
    }
    else {return "No points are given out for ties.";}
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
gameresult(roundresult);
console.log(`Your score is ${playerscore}`);
console.log(`The computers score is ${compscore}`)
gameend(playerscore, compscore);


function gameagain() {
    let playerSelection = playerplay();
    let computerSelection = computerPlay();
    let roundresult = round(playerSelection, computerSelection);
    console.log(roundresult);
    gameresult(roundresult);
    console.log(`Your score is ${playerscore}`);
    console.log(`The computers score is ${compscore}`);
    gameend(playerscore, compscore);
    
}
gameagain();
gameagain();
gameagain();
gameagain();
















