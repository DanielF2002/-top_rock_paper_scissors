console.log("Hello World");

let humanScore = 0, computerScore = 0;

/**
 * Add 3 btn to #btn-container.
 * Every button respects a choice, click to play a round.
 */
let addBtns = () => {
    let texts = ["rock", "paper", "scissors"];
    const btnDiv = document.querySelector("#btn-container");
    for (let i = 0; i < 3; i++) {
        let btn = document.createElement("button");
        btn.textContent = texts[i];
        btn.style["margin"] = "2rem";
        btn.style["background-color"] = "lightblue";
        btn.addEventListener("click", (e)=> {
            playRound(e.target.textContent, getComputerChoice());
        })
        btnDiv.appendChild(btn);
    }
}

/**
 * Main function, play the game 5 rounds, then output the scores to #res-score.
 */
/*
function playGame() {
    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
    console.log(`Human ${humanScore} : Computer ${computerScore}`);
}
*/

/**
 * Single round of the game. Compare 2 choices, output the result to #res-rounds, and update the score board.
 * @param {*} humanChoice The string of human choice.
 * @param {*} computerChoice The string of computer choice.
 */
function playRound(humanChoice, computerChoice) {
    let res = "";
    if (humanChoice === computerChoice) {
        res = `Tie, both are ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") 
        || (humanChoice === "paper" && computerChoice === "scissors") 
        || (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        res = `You lose, ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        res = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    let resRound = document.createElement("p");
    resRound.textContent = res;
    let resRounds = document.querySelector("#res-rounds");
    resRounds.appendChild(resRound);
    let resScore = document.querySelector("#res-score");
    resScore.textContent = `Human ${humanScore} : Computer ${computerScore}`;
}

/**
 * Generate computer's choice by generating a random int between 0-2, then converted to string.
 * @returns The string of computer's choice.
 */
function getComputerChoice() {
    let choice = parseInt(Math.floor(Math.random() * 3));
    return intChoiceToString(choice);
}

/**
 * Generate human's choice by taking user's input.
 * @returns The string of computer's choice.
 */
/*
function getHumanChoice() {
    return intChoiceToString(getUserInput());
}
*/

/**
 * Recurisve call to get user's input unless the input is 0, 1, or 2.
 * @returns The interger of user's choice.
 */
/*
function getUserInput() {
    let input = parseInt(prompt("Please input a value, 0 is rock, 1 is paper, 2 is scissors."));
    return !isNaN(input) && input >= 0 && input <= 2 ? input : getUserInput();
}
*/

/**
 * Conventer the integer choice to string.
 * @param {*} choice The interger choice.
 * @returns The string choice.
 */
function intChoiceToString(choice) {
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log(`intChoiceToString: unexpected parameter: ${choice}`);
    }
}

addBtns();
