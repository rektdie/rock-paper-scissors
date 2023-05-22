const playerScore = document.querySelector(".score-player");
const computerScore = document.querySelector(".score-computer");
let finished = false;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const computerButtons = document.querySelectorAll(".computer");
    computerButtons.forEach(button => {
        if (button.textContent === computerSelection) {
            button.classList.add("clicked");
        } else {
            button.classList.remove("clicked");
        }
    });

    pSelection = playerSelection.toLowerCase();
    cSelection = computerSelection.toLowerCase();
    let result;

    if (playerSelection === computerSelection) {
        result = "Draw";
    } else if (pSelection === "rock" && cSelection === "scissors") {
        result = "You won!";
    } else if (pSelection === "rock" && cSelection === "paper") {
        result = "You lost!";
    } else if (pSelection === "scissors" && cSelection === "paper") {
        result = "You won!";
    } else if (pSelection === "scissors" && cSelection === "rock") {
        result = "You lost!";
    } else if (pSelection === "paper" && cSelection === "rock") {
        result = "You won!";
    } else if (pSelection === "paper" && cSelection === "scissors") {
        result = "You lost!";
    }

    if (result === "You won!"){
        result += ` ${playerSelection} beats ${computerSelection}.`;
        playerScore.textContent++;
    } else if (result === "You lost!"){
        result += ` ${computerSelection} beats ${playerSelection}.`;
        computerScore.textContent++;
    }

    const resultsDiv = document.querySelector(".results");

    if (computerScore.textContent < 5 && playerScore.textContent < 5) {
        resultsDiv.textContent = result;
    } else {
        if (Number(playerScore.textContent) > Number(computerScore.textContent)){
            resultsDiv.textContent = `Congratulations, you won the full game with a score of: ${playerScore.textContent} - ${computerScore.textContent}!`;
        } else {
            resultsDiv.textContent = `Unfortunately, you lost the full game with a score of: ${playerScore.textContent} - ${computerScore.textContent}!`;
        }
        finished = true;
    }
}

const buttons = document.querySelectorAll(".player");
buttons.forEach(button => button.addEventListener("click", (e) => {
    if (finished) {
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        finished = false;
    }

    for (item of buttons) {
        item.classList.remove("clicked");
    }

    let choice = getComputerChoice();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);

    playRound(button.textContent, choice);
    e.target.classList.add("clicked");
}));