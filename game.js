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

  //console.log(computerChoiseNumber);
  console.log("Computer Selection: " + computerChoiseStr);
  return computerChoiseStr;
}

function getPlayerChoice() {

  let playerChoiceStr = prompt("Rock Papper or Scissor?","");
  playerChoiceStr = playerChoiceStr.charAt(0).toUpperCase() + playerChoiceStr.slice(1).toLowerCase();
  console.log("Your Selection: " + playerChoiceStr);
  return playerChoiceStr;
}

function playRound() {
   const playerSelection = getPlayerChoice();
   const computerSelection = getComputerChoice();
   let computerRoundScore = 0;
   let playerRoundScore = 0;

  if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerRoundScore = 1;
    console.log("You Lose! Paper beats Rock");
  }else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    computerRoundScore = 1;
    console.log("You Lose! Scissor beats Paper");
  }else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    computerRoundScore = 1;
    console.log("You Lose! Rock beats Scissor");
  }else if (playerSelection == computerSelection) {
    computerRoundScore = 0;
    playerRoundScore = 0;
    console.log("Tie!");
  }else{
    playerRoundScore = 1;
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  }

  return [playerRoundScore, computerRoundScore];
}

function game() {

  let computerScore = 0;
  let playerScore = 0;

  for (let i=0; i < 5; i++){
    let roundScore = playRound();
    playerScore = playerScore + roundScore[0];
    computerScore = computerScore + roundScore[1];
    console.log("You: " + playerScore + " Computer: " + computerScore);
    console.log("-----------------------")
  }

  if (playerScore > computerScore) {
    alert("YOU WON!\n"+"You: " + playerScore + " Computer: " + computerScore);
  }else if(playerScore == computerScore){
    alert("TIE!\n"+"You: " + playerScore + " Computer: " + computerScore);
  }else{
    alert("YOU LOST!\n"+"You: " + playerScore + " Computer: " + computerScore);
  }

}
