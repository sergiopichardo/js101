const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const ROUNDS_COUNT = 3

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

// only user wins   paper   scissors
function determineWinner(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice)
}


function getPlayersResults(playersData) {
  const { user, computer  } = playersData;
  const isUserWinner = determineWinner(user.choice, computer.choice);
  const isComputerWinner = determineWinner(computer.choice, user.choice);

  let round = {}
  if (isUserWinner) {
    user.status = "won"
    computer.status = "lost"
  } else if (isUserWinner === isComputerWinner) {
    user.status = "tied"
    computer.status = "tied"
  } else {
    user.status = "lost"
    computer.status = "won"
  }

  return playersData
}

function displayPlayersChoices(players) {
  const { user, computer } = players;
  prompt(`You chose ${user.choice}, computer chose ${computer.choice}.`);
}


function displayWinner(playersData) {
  const { user, computer } = playersData;

  if (user.status === 'won') {
    console.log('You win!');
  } else if (computer.status === 'won') {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }
  console.log('\n')
}

function getPlayersChoices() {
  // Get user choice
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // Get computer choice
  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  const computerChoice = VALID_CHOICES[randomIndex]

  return {
    user: { name: "user", choice: choice, round: 0, status: null},
    computer: { name: "computer", choice: computerChoice, round: 0, status: null},
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer[0] === 'y'
}


function displayScoreBoard(gameData) {
  const { rounds, scores } = gameData
  console.log(`ROUND: ${rounds} USER: ${scores.user} COMPUTER: ${scores.computer}`)
}


function updateGameData(playersData) {
  const { user, computer } = playersData
  if (user.status === "tied") {
    GAME_DATA.scores.user += 1;
    GAME_DATA.scores.computer += 1;
  } else {
    let isWinner = (user.status === "won") ? user.name : computer.name
    GAME_DATA.scores[isWinner] += 1
  }
}



/*******************************************************
 *  MAIN PROGRAM
 *******************************************************/

while (true) {
  GAME_DATA.rounds++

  displayScoreBoard(GAME_DATA)

  const playersChoices = getPlayersChoices();
  const playersData = getPlayersResults(playersChoices);

  updateGameData(playersData)
  displayPlayersChoices(playersData)
  displayWinner(playersData)

  if (GAME_DATA.rounds === ROUNDS_COUNT) {
    if (!playAgain()) {
      console.log("GAME OVER.")
      break;
    }
  }
}

function displayGameSummary(playersData, gameData) {
  const { user, computer, winner } = playersData;
  const { rounds, scores } = gameData;

  if (winner === 'tie') {
    console.log(`The game resulted in a tie`)
  } else {
    console.log(`The game was won by ${winner}!`)
  }

}