function computerPlay() {
    let possible = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * (3));
    let computerSelected = possible[number].toLowerCase();
    return computerSelected
}

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
}

let rockButton = document.querySelector(".rock");
let paperButton =  document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

let playerPhoto = document.querySelector(".player").querySelector("img");
let computerPhoto = document.querySelector(".computer").querySelector("img");


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


function checkWinner(playerScore, computerScore) {
    if (computerScore >= 5) {
        computerScore = 5;
        playerScore = playerScore;
        playerPhoto.src="img/lost.png";
        computerPhoto.src="img/won.png";
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
        statusHeaderText.textContent = "GAME OVER"
        statusText.textContent = "The computer wins."
    }
    else if (playerScore >= 5) {
        playerScore = 5;
        playerPhoto.src="img/won.png";
        computerPhoto.src="img/lost.png";
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
        statusHeaderText.textContent = "GAME OVER"
        statusText.textContent = "You win."
    }
}
function round(){

    if (
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/rock.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/paper.png") ||
    (playerPhoto.src === "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png" && computerPhoto.src == "file:///home/pnarbondo/repos/odin/odin-rps/top-rock-paper-scissors/img/scissors.png")
    )
    {
        statusHeaderText.textContent = "No one wins"
        statusText.textContent = "It's a tie !";
        playerScoreText.textContent = `Player: ${playerScore}`
        computerScoreText.textContent = `Computer: ${computerScore}`;
        checkWinner(playerScore, computerScore);
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
        checkWinner(playerScore, computerScore);
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
        checkWinner(playerScore, computerScore);
    }
}

playerPlay();
