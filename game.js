const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const ground = document.querySelector(".ground");
const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#comp-score");
const resultDiv = document.querySelector(".result");

let userScore = 0;
let computerScore = 0;

function game(userChoice) {
  console.log(userChoice);

  const choices = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  const computerChoice = choices[random];
  console.log(userChoice);
  console.log(computerChoice);
  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    win(userChoice, computerChoice);
  } else if (
    (userChoice === "paper" && computerChoice === "scissor") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "scissor" && computerChoice === "rock")
  ) {
    lose();
  } else {
    draw();
  }
}

function main() {
  rock.addEventListener("click", () => game("rock"));
  ground.addEventListener("click", () => game("scissor"));
  paper.addEventListener("click", () => game("paper"));
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  resultDiv.innerHTML =
    userChoice + " beats " + computerChoice + " so you won ";
}

function lose() {
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = 
    computerChoice + " beats " + userChoice + " so depression won "
}

function draw() {}

main();
