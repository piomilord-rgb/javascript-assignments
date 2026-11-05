const choices=["Rock","paper","scissors"];
function getComputerChoice(){
    const randomIndex=Math.floor(Math.random() *3);
    return choices[randomIndex];
}
function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");


function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  let message;
  if (winner === "draw") {
    message = `You both picked ${playerChoice}. It's a draw!`;
  } else if (winner === "player") {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}. You win! 🎉`;
  } else {
    message = `You picked ${playerChoice}, computer picked ${computerChoice}. You lose! 😢`;
  }

  resultText.textContent = message;
}

rockButton.addEventListener("click", function () {
  playRound("rock");
});

paperButton.addEventListener("click", function () {
  playRound("paper");
});

scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});















































