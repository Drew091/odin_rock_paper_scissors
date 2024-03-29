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

function playRound(playerSelectionButton) {
   const playerSelection = playerSelectionButton;
   console.log("Your Selection: " + playerSelectionButton);
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

let computerScore = 0;
let playerScore = 0;

const game = function(btn){
  const container = document.querySelector('#Score');

  const content = document.createElement('div');
  content.classList.add('content');
  content.setAttribute("id","cont");

    let roundScore = playRound(btn.target.value);
    playerScore = playerScore + roundScore[0];
    computerScore = computerScore + roundScore[1];

    if (playerScore == 5){
      content.textContent = "YOU WON!\n"+"You: " + playerScore + " Computer: " + computerScore;
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
      button.removeEventListener('click', game);
      });
    }else if (computerScore == 5){
      content.textContent = "YOU LOST!\n"+"You: " + playerScore + " Computer: " + computerScore;
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
      button.removeEventListener('click', game);
      });
    }else{
      content.textContent = "You: " + playerScore + " Computer: " + computerScore;
    }

    const valami = document.getElementsByClassName('content');
    if (valami.length > 0) {
      const cont = document.querySelector('#cont')
      cont.remove();
    }

    container.appendChild(content);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', game)
});




/* game function in comment
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
*/
