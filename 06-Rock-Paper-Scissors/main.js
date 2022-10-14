const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === " paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Error Message");
    }
  };
  
  function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random < (3 * 1) / 3) {
      return "rock";
    } else if (random < (3 * 2) / 3) {
      return "paper";
    } else if (random < (3 * 3) / 3) {
      return "scissors";
    }
  }
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "The game is a tie";
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return "The computer wins !"; 
      } else {
        return " You win"
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        return "The computer wins !"; 
      } else {
        return " You win"
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock') {
        return "The computer wins !"; 
      } else {
        return " You win"
      }
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  