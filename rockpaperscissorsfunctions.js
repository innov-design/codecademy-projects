const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('Please enter a valid option, either Rock, Paper, or Scissors.')
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User wins!'
  }
  if (userChoice === computerChoice) {
    return 'The game was a tie.'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!'
    }
    else {
      return 'User wins!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!'
    } 
    else {
      return 'User wins!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!'
    }
    else {
      return 'User wins!'
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();

