let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "GAME WAS DRAW, PLAY AGAIN."
};

const showWinner = (userWin, userChoice, compChoice) => {
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("YOU WIN");
    msg.innerText = `YOU WIN. Your ${userChoice} beats ${compChoice}`;
    // msg.style.backgroundColor = "green";
   } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `YOU LOSE. ${compChoice} beats Your ${userChoice}`;
   }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate Computer Choice 
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);
    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "Rock"){
            // scissors, paper
            userWin = compChoice === "Paper" ? false : true;
        } else if(userChoice ==="Paper") {
            // rock, scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            // rock , paper 

            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    // console.log("choice");
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked", userChoice);
        playGame(userChoice);
    });
});