'use strict'

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

function whoWins() {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("What do you choose? Rock, Paper or Scissors");
  playerSelection = capitalize(playerSelection);
  console.log(playerSelection);
  
  if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
    return `You Lose! You didn't choose Rock, Paper or Scissors`;
  } else if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    return `Computer Lose! ${playerSelection} beats ${computerSelection}`;
  } else {
    return 'Draw!!!'
  }
}

document.write(whoWins());
