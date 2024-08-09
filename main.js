
let humanScore = 0;
let computerScore = 0;




function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3) + 1;
    return randNum;
    // This returns a number either 1, 2, or 3. Correlating to rock, paper, or scissors respectivly.
}

// console.log(getComputerChoice())

function getHumanChoice(){
    let choice = Number(prompt("1=Rock - 2=Paper - 3=Scissors"));
    return choice;
}

// console.log(getHumanChoice());

function playRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();


    if(humanChoice == 1 && computerChoice == 1) {
        console.log("Tie!");

    } else if(humanChoice == 1 && computerChoice == 2) {
        console.log("You Lose! Paper Beats Rock!");
        computerScore++;
    } else if(humanChoice == 1 && computerChoice == 3) {
        console.log("You Win! Rock Beats Scissors!");
        humanScore++;
    } else if(humanChoice == 2 && computerChoice == 1) {
        console.log("You Win! Paper Beats Rock!");
        humanScore++;
    } else if(humanChoice == 2 && computerChoice == 2) {
        console.log("Tie!");
    } else if(humanChoice == 2 && computerChoice == 3) {
        console.log("You Lose! Scissors Beats Paper!");
        computerScore++;
    } else if(humanChoice == 3 && computerChoice == 1) {
        console.log("You Lose! Rock Beats Scissors!");
        computerScore++;
    } else if(humanChoice == 3 && computerChoice == 2) {
        console.log("You Win! Scissors Beats Paper!");
        humanScore++;
    } else if(humanChoice == 3 && computerChoice == 3) {
        console.log("Tie!");
    }
}

function playGame() {
    for(let i=0; i<5; i++) {
        playRound();
    }
    console.log("Game Over! Computer Score: "+computerScore+" | Your Score: "+humanScore);
}

playGame();



