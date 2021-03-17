const readline = require('readline-sync');

const NAME_CHOICES_MAP = {
  'r' : "rock",
  'p' : "paper",
  's' : "scissors",
  'l' : "lizard",
  'sp' : "spock"
}
const VALID_CHOICES = Object.keys(NAME_CHOICES_MAP)


const WINNING_COMBOS = {
  r:     ['scissors', 'lizard'],
  p:     ['rock',     'spock'],
  s:     ['paper',    'lizard'],
  l:     ['paper',    'spock'],
  sp:    ['rock',     'scissors'],
};

const DEFAULT_GAME_ROUNDS = 5;

let GAME_DATA = {
  rounds: 0,
  scores: {
    user: 0,
    computer: 0
  }
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(userChoice, computerChoice) {
  return WINNING_COMBOS[userChoice].includes(computerChoice);
}

function displayWinnerMessage(userChoice, computerChoice, winner) {
  prompt(`You chose ${NAME_CHOICES_MAP[userChoice]}, computer chose ${NAME_CHOICES_MAP[computerChoice]}.`);
  let message = ""
  if (winner === 'user') {
    message = 'You win!'
  } else if (winner === 'tie') {
    message = "It's a tie!"
  } else if (winner === 'computer') {
    message = "Computer wins!"
  }

  prompt(message)
  console.log("");
}

function getWinner(userChoice, computerChoice) {
  const isUserWinner = playerWins(userChoice, computerChoice)
  const isComputerWinner = playerWins(computerChoice, userChoice)
  console.log("is user winner: ", isUserWinner)
  console.log("is computer winner: ", isComputerWinner)

  if (isUserWinner === true && isComputerWinner === false) {
    winner = "user"
  } else if (isUserWinner === isComputerWinner) {
    winner = "tie"
  } else {
    winner = "computer"
  }
  return winner
}

function playAgain() {
  prompt('Would you like to play again? (y/n) ');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "y") {
    // console.clear();
    return true;
  }
  // console.clear();
  console.log("Game over.");
  return false;
}

function displayGameData(userScore, computerScore, rounds) {
  // console.clear()
  console.log("")
  console.log("round:", rounds, "user:", userScore, "computer:", computerScore)
}


function updateGameData(winner) {
  if (winner === "user") {
    GAME_DATA.scores.user += 1
    console.log("user score: ", GAME_DATA.scores.user)
  } else if (winner === "computer") {
    GAME_DATA.scores.computer += 1
    console.log("user score: ", GAME_DATA.scores.computer)
  } else {
    GAME_DATA.scores.user += 1
    GAME_DATA.scores.computer += 1
    console.log("user score: ", GAME_DATA.scores.user)
  }
}


function displayGameScoresMessage(userScore, computerScore, defaultRounds) {
  let gamesWon = 0
  let message = ""
  if (userScore > computerScore) {
    gamesWon = defaultRounds - computerScore
    message = `You win!\nYou won ${gamesWon} out of ${defaultRounds} games.`;
  }
  else if (userScore < computerScore) {
    gamesWon = defaultRounds - userScore
    message = `Computer wins!\nComputer won ${gamesWon} out of ${defaultRounds} games.`;
  }
  else if (userScore === computerScore) {
    message = `You and Computer tied all ${defaultRounds} games!`;
  }
  console.log(message)
}


function resetGameData() {
  GAME_DATA.rounds = 0;
  GAME_DATA.scores.user = 0;
  GAME_DATA.scores.computer = 0;
}

function getPlayersChoice() {
  // Get user choice
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice.");
    userChoice = readline.question();
  }

  // Get computers choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return { userChoice, computerChoice }
}


// MAIN
displayGameData(GAME_DATA.scores.user, GAME_DATA.scores.computer, GAME_DATA.rounds);

while (true) {
  // update round
  GAME_DATA.rounds += 1;

  const { userChoice, computerChoice } = getPlayersChoice()
  const winner = getWinner(userChoice, computerChoice);

  updateGameData(winner)
  displayGameData(GAME_DATA.scores.user, GAME_DATA.scores.computer, GAME_DATA.rounds);
  displayWinnerMessage(userChoice, computerChoice, winner)

  if (GAME_DATA.rounds === DEFAULT_GAME_ROUNDS) {
    displayGameScoresMessage(GAME_DATA.scores.user, GAME_DATA.scores.computer, DEFAULT_GAME_ROUNDS)
    resetGameData()
    if (!playAgain()) break;
  }
}

