console.log("HELLO WORLD");

function getComputerChoice() {

  let computerChoiseNumber;
  computerChoiseNumber = Math.floor(Math.random() * 3);

  let computerChoiseStr;
  switch (computerChoiseNumber) {
    case 0:
        computerChoiseStr = "Rock";
      break;
    case 1:
        computerChoiseStr = "Paper";
      break;
    case 2:
        computerChoiseStr = "Scissor";
      break;
    default:
  }

  console.log(computerChoiseNumber);
  console.log(computerChoiseStr);
  return computerChoiseStr;
}

function getPlayerChoice() {

  let playerChoiceStr = prompt("Rock Papper or Scissor?","");
  playerChoiceStr = playerChoiceStr.charAt(0).toUpperCase() + playerChoiceStr.slice(1).toLowerCase();
  console.log(playerChoiceStr);
  return playerChoiceStr;
}

function playRound () {
   const playerSelection = getPlayerChoice();
   const computerSelection = getComputerChoice();

  if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You Lose! Paper beats Rock");
  }else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    console.log("You Lose! Scissor beats Paper");
  }else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    console.log("You Lose! Rock beats Scissor");
  }else if (playerSelection == computerSelection) {
    console.log("Tie!");
  }else{
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  }
}

function game() {

  getPlayerChoice();
  getComputerChoice();


}
