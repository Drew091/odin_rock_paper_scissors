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

function game() {

  let playerChoice = prompt("Rock Papper or Scissor?","");
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
  console.log(playerChoice);

  getComputerChoice();
}
