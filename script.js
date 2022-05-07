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
                return "youWin"
             }
    else if
            (
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")
            )
             return "youLose"
        
        if (playRound(playerSelection, computerSelection) === "youWin") {
                console.log("You win; " + playerSelection + " beats " + computerSelection + "!")
            }
        else if (playRound(playerSelection, computerSelection) === "youLose") {
                console.log("You lose; " + computerSelection + " beats " + playerSelection + ".")
            }                
}
