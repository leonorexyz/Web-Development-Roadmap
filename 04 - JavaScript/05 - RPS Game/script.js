let repeat = true;

while (repeat) {
    // Get player's choice
    let playerChoices = prompt("Choose rock, paper, or scissors:").toLowerCase();

    // Get computer's choice with randomization

    let computerChoices = Math.random();
    if (computerChoices < 0.34) {
        computerChoices = "rock";
    } else if (computerChoices <= 0.67) {
        computerChoices = "paper";
    } else {
        computerChoices = "scissors";
    }

    // Rules
    if (playerChoices === computerChoices) {
        result = "Draw!";
    } else if (playerChoices === "rock") {
        result = computerChoices === "scissors" ? "Win!" : "Lose!";
    } else if (playerChoices === "paper") {
        result = computerChoices === "rock" ? "Win!" : "Lose!";
    } else if (playerChoices === "scissors") {
        result = computerChoices === "paper" ? "Win!" : "Lose!";
    } else {
        result = "Invalid choice! Please choose rock, paper, or scissors.";
    }

    // Show results
    alert(`You chose: ${playerChoices}\nComputer chose: ${computerChoices}\nResult: ${result}`);

    // Ask to play again
    repeat = confirm("Do you want to play again?");
}

alert("Thanks for playing!");

