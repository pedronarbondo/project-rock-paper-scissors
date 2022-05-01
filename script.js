/* Create function that returns a random choice between the three possible */
function computerPlay() {
    let possible = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * (3));
    let computerSelected = possible[number].toLowerCase();
    return computerSelected
}
/* Create function that returns whatever the played types on the input */
function playerPlay() {
    let playerSelected = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerSelected;
}

/* Assign the values of the functions previously defined to variables to use in future functions*/
/*let computerSelection = computerPlay();
let playerSelection = playerPlay();
*/

/* Create a function that returns a string that explains who wins */
function playRound(playerSelection, computerSelection) {
    let youWin = "You win; " + playerSelection + " beats " + computerSelection + "!";
    let youLose = "You lose; " + computerSelection + " beats " + playerSelection + "."
    if (playerSelection === computerSelection){
        return "It's a tie!"
    }
    else if
           (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
            )
            {
                return youWin
             }
    else if
            (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
            )
             return youLose
                 
}

/* Create a function that runs the function playRound 5 times, considering a score*/

function game(){

    let playerScore = 0; /* Define variables for scores */
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) { /*Define a loop that runs for 5 rounds*/
    /* Each round, the loop should run the computerPlay and playerPlay function to define the picks for the round */
        let computerSelection = computerPlay(); 
        let playerSelection = playerPlay();
    /* After the picks are assigned to the variables, run the playRound function with those values */    
        playRound(playerSelection, computerSelection);
    /* Each time per loop, check who won */
    
        if (playRound (playerSelection, computerSelection) === youWin) {
            playerScore += 1;
        }
        else if (playRound (playerSelection, computerSelection) === youLose) {
            computerScore += 1;
        }  
    }
    /* After the 5 rounds are looped, alert the result of the game */
    if (playerScore > computerScore) {
        alert("You beat the computer!");
    }
    else if (playerScore < computerScore) {
        alert("You lose!");
    }
    else if (playerScore === computerScore) {
        alert("It's a tie!");
    }
}

game();

