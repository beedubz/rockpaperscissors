
let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    numb = getRandomInt(3);
    if (numb === 0) {
        console.log("Computer: Rock");
        return "rock";}
    else if (numb === 1) {
        console.log("Computer: Paper");
        return "paper";
    }
    else {
        console.log("Computer: Scissors");
        return "scissors";
        return getComputerChoice();
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (choice == "rock") {
        console.log("You: Rock");
    }
    else if (choice == "paper") {
        console.log("You: Paper");
    }
    else if (choice == "scissors") {
        console.log("You: Scissors");
    }
    else {
        console.log("I can only accept Rock, Paper, or Scissors. Check your response and try again.")
        getHumanChoice()}
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`)
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You won! The score is now You: ${humanScore} vs. Computer:${computerScore}.`);
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++
        console.log(`You lost suckah! The score is now You: ${humanScore} vs. Computer:${computerScore}`);
    }
    else {
        console.log("You and the Computer tied! Play again.");
        playRound();
}
}

function playMatch() {
    humanScore = 0;
    computerScore = 0;

    while (humanScore < 3 && computerScore < 3) { // Main change: while loop
        playRound();
    }

    if (humanScore === 3) {
        console.log("You won the match! Ascend to Valhalla on the shanks of Pegasus!");
    } else {
        console.log("You lost the match! Cover yourself in sackcloth and go into the wilderness!");
    }
    console.log(`Final Score: You ${humanScore}, Computer ${computerScore}`)
}

playMatch();