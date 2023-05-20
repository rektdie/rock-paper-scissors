function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;

    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You won!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lost!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You won!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lost!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You won!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lost!";
    }

    if (result === "You won!"){
        result += ` ${playerSelection} beats ${computerSelection}`;
    } else {
        result += ` ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5){
        const round = playRound(prompt(), getComputerChoice());
        if (round.includes("You won!")) {
            playerScore++;
        } else if (round.includes("You lost!")){
            computerScore++;
        }
        console.log(round + " " + playerScore + " - " + computerScore)
    }

    if (playerScore > computerScore){
        return "You won the full game!";
    } else {
        return "The computer won the full game!";
    }
}