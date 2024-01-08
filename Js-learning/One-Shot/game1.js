// Create  a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct values.

let gameNum = 25;
let userNum = prompt("Guess the Game Number");

while (userNum!= gameNum)

{
    userNum= prompt("You entered the wrong number. Guess again ");
}

console.log(`You entered the Right Number. Congratulations`); 