"use strict";

let capitalize = (str) => {
  str = str.toLowerCase();
  let strFirst = str.slice(0, 1);
  str = str.slice(1, str.length);
  strFirst = strFirst.toUpperCase();
  str = strFirst + str;
  return str;
};

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
  }
}

for (let i = 0; i < 5; i++) {
  function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("What do you choose? Rock, Paper or Scissors");

    if (playerSelection === null) {
        return `You Lose! You didn't choose Rock, Paper or Scissors<br><br>`;
    }

    playerSelection = capitalize(playerSelection);

    if (
      playerSelection !== "Rock" &&
      playerSelection !== "Paper" &&
      playerSelection !== "Scissors"
    ) {
      return `You Lose! You didn't choose Rock, Paper or Scissors<br><br>`;
    } else if (
      (computerSelection === "Rock" && playerSelection === "Scissors") ||
      (computerSelection === "Paper" && playerSelection === "Rock") ||
      (computerSelection === "Scissors" && playerSelection === "Paper")
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}<br><br>`;
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      return `Computer Lose! ${playerSelection} beats ${computerSelection}<br><br>`;
    } else {
      return "Draw!!!<br><br>";
    }
  }
  document.write(playRound());
}
