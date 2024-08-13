
let humanScore = 0;
let computerScore = 0;
let tieCount = 0;
let winThreshold;

//Asks the user how many points they want to play to after the window has loaded
window.addEventListener("DOMContentLoaded", function() {
    winThreshold = prompt("How many points do you want to play to?", "Type Here");
});

const buttonContainer = document.querySelector(".button-container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const computerChoiceText = document.querySelector("#choice-content");

const scoreText = document.querySelector("#score");


rock.addEventListener("click",  function(){
    playRound(1);
});

paper.addEventListener("click",  function(){
    playRound(2);
});

scissors.addEventListener("click",  function(){
    playRound(3);
});



function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3) + 1;
    return randNum;
    // This returns a number either 1, 2, or 3. Correlating to rock, paper, or scissors respectivly.
}




function playRound(choice) {
    humanChoice = choice;
    computerChoice = getComputerChoice();

    

    if(humanChoice == 1 && computerChoice == 1) {
        // console.log("Tie!");
        tieCount++;
    } else if(humanChoice == 1 && computerChoice == 2) {
        // console.log("You Lose! Paper Beats Rock!");
        computerScore++;
    } else if(humanChoice == 1 && computerChoice == 3) {
        // console.log("You Win! Rock Beats Scissors!");
        humanScore++;
    } else if(humanChoice == 2 && computerChoice == 1) {
        // console.log("You Win! Paper Beats Rock!");
        humanScore++;
    } else if(humanChoice == 2 && computerChoice == 2) {
        // console.log("Tie!");
        tieCount++;
    } else if(humanChoice == 2 && computerChoice == 3) {
        // console.log("You Lose! Scissors Beats Paper!");
        computerScore++;
    } else if(humanChoice == 3 && computerChoice == 1) {
        // console.log("You Lose! Rock Beats Scissors!");
        computerScore++;
    } else if(humanChoice == 3 && computerChoice == 2) {
        // console.log("You Win! Scissors Beats Paper!");
        humanScore++;
    } else if(humanChoice == 3 && computerChoice == 3) {
        // console.log("Tie!");
        tieCount++;
    }

    if(computerChoice ==  1){
        computerChoiceText.textContent = "Rock";
    } else if(computerChoice ==  2){
        computerChoiceText.textContent = "Paper";
    } else if(computerChoice ==  3){
        computerChoiceText.textContent = "Scissors";
    } 

    scoreText.textContent = "You: "+humanScore+" | Computer: "+computerScore+" | Ties: "+tieCount;

    if(computerScore >= winThreshold){
        scoreText.textContent = "You Lose! The Computer Reached "+winThreshold+" Points!";
        buttonContainer.remove();
    } else if(humanScore >= winThreshold){
        scoreText.textContent = "You Win! You Reached "+winThreshold+" Points!"
        buttonContainer.remove();
    }
}











