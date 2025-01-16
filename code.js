
let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice() {
    let numb = getRandomInt(3);
    if (numb === 0) {
        results.appendChild(document.createTextNode("Computer: Rock"));
        results.appendChild(document.createElement("br"));
        return "rock";}
    else if (numb === 1) {
        results.appendChild(document.createTextNode("Computer: Paper"));
        results.appendChild(document.createElement("br"));
        return "paper";
    }
    else {
        results.appendChild(document.createTextNode("Computer: Scissors"));
        results.appendChild(document.createElement("br"));
        return "scissors";
    }
}

function disableButtons() {
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;}

function enableButtons() {
    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissorsbtn.disabled = false;}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    results.textContent = "Results";
    results.appendChild(document.createElement("br"));
    results.appendChild(document.createElement("br")); // Add an extra break line if needed 
    enableButtons(); // Re-enable buttons for the next game
}

function playAgain() {
    const container = document.createElement('div');
    const promptText = document.createElement('p');
    promptText.textContent = "Do you want to play again?";
    container.appendChild(promptText);
    const yesButton = document.createElement('button');
    yesButton.textContent = "Yes";
    const noButton = document.createElement('button');
    noButton.textContent = "No";
    yesButton.addEventListener('click', () => {
        resetGame();
        document.body.removeChild(container);
      });
    noButton.addEventListener('click', () => {
        // Optionally display a "Game Over" message or similar
        alert("Thanks for playing! You can reload the page if you want to play again.");
        // Remove the prompt container
        document.body.removeChild(container)});
    container.appendChild(yesButton);
    container.appendChild(noButton);
    document.body.appendChild(container);
}

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    results.appendChild(document.createTextNode(`You chose ${humanChoice} and the computer chose ${computerChoice}.`))
    results.appendChild(document.createElement("br"));
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        results.appendChild(document.createTextNode(`You won! The score is now You: ${humanScore} vs. Computer:${computerScore}.`));
        results.appendChild(document.createElement("br"));
        results.appendChild(document.createElement("br"));
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++
        results.appendChild(document.createTextNode(`You lost suckah! The score is now You: ${humanScore} vs. Computer:${computerScore}`));
        results.appendChild(document.createElement("br"));
        results.appendChild(document.createElement("br"));
    }
    else {
        results.appendChild(document.createTextNode("You and the Computer tied! Play again."));
        results.appendChild(document.createElement("br"));
        results.appendChild(document.createElement("br"));
}
    if (humanScore === 3) {
    results.appendChild(document.createTextNode("You won the match! Ascend to Valhalla on the shanks of Pegasus!"));
}   if (computerScore === 3) {
    results.appendChild(document.createTextNode(("You lost the match! Cover yourself in sackcloth and go into the wilderness!")));
}
    if (humanScore === 3 || computerScore === 3) {
        results.appendChild(document.createElement("br"));
        results.appendChild(document.createTextNode((`Final Score: You ${humanScore}, Computer ${computerScore}`)));
        disableButtons();
        playAgain();
    }
}

const rockbtn = document.createElement("button");
const paperbtn = document.createElement("button");
const scissorsbtn = document.createElement("button");
const resultsHeading = document.createElement("p");
const results = document.createElement("div");

rockbtn.textContent = "Rock me, baby!";
paperbtn.textContent = "Paper blizzard!";
scissorsbtn.textContent = "Scissor attack!";
results.textContent = "Results";

rockbtn.addEventListener("click", () => {
    playRound("rock");
  });
paperbtn.addEventListener("click", () => {
    playRound("paper");
  });
scissorsbtn.addEventListener("click", () => {
    playRound("scissors");
  });

document.body.appendChild(rockbtn);
document.body.appendChild(paperbtn);
document.body.appendChild(scissorsbtn);
document.body.appendChild(resultsHeading);
document.body.appendChild(results);
results.appendChild(document.createElement("br"));
results.appendChild(document.createElement("br"));