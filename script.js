function computerPlay() {
    let possible = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * (3));
    let computerSelected = possible[number].toLowerCase();
    return computerSelected
}

/* Incredibly this next function worked on the first time */
function changeComputerPhoto(){
    computerPlay();
    let computerChoice = computerPlay();
    switch (computerChoice) {
    case "rock":
        computerPhoto.src="img/rock.png";
        return computerChoice;
    case "paper":
        computerPhoto.src="img/paper.png";
        return computerChoice;
    case "scissors":
        computerPhoto.src="img/scissors.png";
        return computerChoice;
    }
}

/* This next group is everything related to the buttons and the chosen-item images */
let rockButton = document.querySelector(".rock");
let paperButton =  document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let playerPhoto = document.querySelector(".player").querySelector("img");
let computerPhoto = document.querySelector(".computer").querySelector("img");


function playerPlay(){
let playerChoice; 
rockButton.addEventListener('click', () => {playerPhoto.src="img/rock.png", playerChoice = "rock"});
paperButton.addEventListener('click', () => {playerPhoto.src="img/paper.png", playerChoice = "paper"});
scissorsButton.addEventListener('click', () => {playerPhoto.src="img/scissors.png", playerChoice = "scissors"});
return playerChoice;
}




/* This group of references is for the top part of the UI, with the status */
let playerScoreText = document.querySelector(".player").querySelector("p");
let computerScoreText = document.querySelector(".computer").querySelector("p");
let statusText = document.querySelector('p');


let playerScore = 0;
let computerScore = 0;


function playRps(){
for (let i = 0; playerScore <= 5 || computerScore <= 5; i++){

playerPlay();
changeComputerPhoto();

    if (changeComputerPhoto() === playerPlay()) {
        statusText.textContent = "It's a tie!"
    }
    else if
    (
     (playerPlay() === "rock" && changeComputerPhoto() === "scissors") ||
     (playerPlay() === "paper" && changeComputerPhoto() === "rock") ||
     (playerPlay() === "scissors" && changeComputerPhoto() === "paper")
     )
     {
        statusText.textContent = "You win one point!";
        playerScore++;
        playerScoreText.textContent = `Player: ${playerScore}`
     }
     else if
     (
     (playerPlay() === "rock" && changeComputerPhoto() === "paper") ||
     (playerPlay() === "paper" && changeComputerPhoto() === "scissors") ||
     (playerPlay() === "scissors" && changeComputerPhoto() === "rock")
     ){
     statusText.textContent = "The computer wins one point!";
     computerScore++;
     computerScoreText.textContent = `Computer: ${computerScore}`;
     }
    }
}