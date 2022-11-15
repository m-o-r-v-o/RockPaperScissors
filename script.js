function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            return "Computer wins!";
        }
        else {
            return "Player wins!";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Computer wins!";
        }
        else {
            return "Player wins!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Computer wins!";
        }
        else {
            return "Player wins!"
        }
    }
}

function getPlayerChoice() {
    let pickingChoice = true;
    while (pickingChoice){
        let choice = prompt("Rock, Paper, or Scissors?");
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            let pickingChoice = false;
            return choice;
        }
        else {
            console.log("Please enter a proper opton");
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5){
        let playerChoice = getPlayerChoice();
        console.clear();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice,computerChoice);
        console.log("Player chose: " + playerChoice + "     Computer chose: " + computerChoice);
        console.log(result);
        if (result === "Player wins!") {
            playerScore++;
            console.log("Player score: " + playerScore + "     Computer score: " + computerScore);
        }
        else if (result === "Computer wins!") {
            computerScore++;
            console.log("Player score: " + playerScore + "     Computer score: " + computerScore);
        }
        else {
            console.log("Player score: " + playerScore + "     Computer score: " + computerScore);
        }
    }
    if (playerScore === 5) {
        console.log("Player wins the game!!!");
    }
    else {
        console.log("Computer wins the game :(");
    }
}

game();