function game(userChoice) {
  let computerChoice = Math.floor(Math.random() * 3); //0 is rock, 1 is paper, 2 is scissors
  computerChoice =
    computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";

  if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    return "DRAW";
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    compScore++;
    return `you lost! ${computerChoice} beats ${userChoice}`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return `You Won! ${userChoice} beats ${computerChoice}`;
  } else return "try again";
}
let results = [];
let compScore = 0;
let userScore = 0;
for (let i = 0; i <= 4; i++) {
  userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
  results.push(game(userChoice));
  alert(results[i]);
}
console.log(results);
console.log(`User Score=${userScore}`);
console.log(`Computer Score=${compScore}`);
alert(`User Score=${userScore} || Computer Score=${compScore}`);
