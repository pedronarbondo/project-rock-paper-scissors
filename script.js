function computerPlay() {
    let possible = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * (3));
    let computerSelected = possible[number].toLowerCase();
    return computerSelected
}
let computerChoice;
/* Incredibly this next function worked on the first time */
function changeComputerPhoto(){
    computerPlay();
    let computerChoice = computerPlay();
    switch (computerChoice) {
    case "rock":
        computerPhoto.src="img/rock.png";
        break;
    case "paper":
        computerPhoto.src="img/paper.png";
        break;
    case "scissors":
        computerPhoto.src="img/scissors.png";
        break;
    }
    console.log(`Computer chose ${computerChoice}`);
}

/* This next group is everything related to the buttons and the chosen-item images */
let rockButton = document.querySelector(".rock");
let paperButton =  document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let playerPhoto = document.querySelector(".player").querySelector("img");
let computerPhoto = document.querySelector(".computer").querySelector("img");


/* This group of references is for the top part of the UI, with the status */
let playerScoreText = document.querySelector(".player").querySelector("p");
let computerScoreText = document.querySelector(".computer").querySelector("p");
let statusHeaderText = document.querySelector('h3');
let statusText = document.querySelector('p');

let playerScore = 0;
let computerScore = 0;

function playerPlay(){
rockButton.addEventListener('click', () => {playerPhoto.src="img/rock.png", changeComputerPhoto(), round()});
paperButton.addEventListener('click', () => {playerPhoto.src="img/paper.png", changeComputerPhoto(), round()});
scissorsButton.addEventListener('click', () => {playerPhoto.src="img/scissors.png", changeComputerPhoto(), round()});
}


function round(){
        
if (computerScore == 5) {
    playerScoreText.textContent = `Player: ${playerScore}`
    computerScoreText.textContent = `Computer: ${computerScore}`;
    statusHeaderText.textContent = "GAME OVER"
    statusText.textContent = "The computer wins."
}

else if (playerScore == 5) {
    playerScoreText.textContent = `Player: ${playerScore}`
    computerScoreText.textContent = `Computer: ${computerScore}`;
    statusHeaderText.textContent = "GAME OVER"
    statusText.textContent = "You win."
}
    else if (
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png")
    )
    {
        statusHeaderText.textContent = "No one wins"
        statusText.textContent = "It's a tie !";
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
    }
    else if
    (
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png")
    )
    {
        playerScore++;
        statusHeaderText.textContent = "You won!"
        statusText.textContent = "You are awarded one point !";
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
    }
    else if
    (
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png")
    )
    {
        computerScore++
        statusHeaderText.textContent = "You lost!"
        statusText.textContent = "The computer won one point !";
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
    }
}

playerPlay();
