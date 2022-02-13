// get the element from browser

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("game-result");
const playerScore = document.getElementById("player_score");
const computerScore = document.getElementById("computer_score");
const board = document.getElementById("game");
let userPoint =0;
let computerPoint= 0;
let roundCounter = 1;

// computer random choose
const computerPlay = () => {
    const tablePlay = ["rock", "paper", "scissors"];
    const randomSelectionNumber = Math.floor(Math.random() * tablePlay.length);
    const computerChoose = tablePlay[randomSelectionNumber];
    return computerChoose;
}
const userPlay = (e) => {
    userSelection = e.srcElement.id;
    game();
    
}

const userWin = () => {
    console.log(`End game!`);
    // console.log(board)
    board.innerHTML = `This is end of the game, you win ${userPoint} to ${computerPoint} in ${roundCounter} rounds`;
    
}

const computerWin = () => {
    board.innerHTML = `This is end of the game, you loose ${computerPoint} to ${userPoint} in ${roundCounter} rounds`;
}

const playRound = (userSelection, computerSelection) => {
   
    if (userSelection == computerSelection) {

        result.innerHTML = `Round number ${roundCounter}. ${userSelection} is the same as ${computerSelection}. Draw!`;

    } else if (userSelection == 'rock' && computerSelection == 'paper' || userSelection == 'paper' && computerSelection == 'scissors' || userSelection == 'scissors' && computerSelection == 'rock') {

        result.innerHTML = `Round number ${roundCounter}. ${computerSelection} beat ${userSelection}. You loose!`;
        computerPoint++
        computerScore.innerHTML = computerPoint;
        if(computerPoint == 5) {
            computerWin();
        }

    } else if (userSelection == 'rock' && computerSelection == 'scissors' || userSelection == 'paper' && computerSelection == 'rock' || userSelection == 'scissors' && computerSelection == 'paper') {

        result.innerHTML = `Round number ${roundCounter}. ${userSelection} beat ${computerSelection}. You win!`;
        userPoint++;
        playerScore.innerHTML = userPoint;
        if(userPoint == 5) {
            userWin();
        }
    }
    roundCounter++;
}
const game = () => {
// write.innerHTML = `<img src="./images/falling-rocks.png" alt="rock">`

            const computerSelection = computerPlay();
            playRound(userSelection, computerSelection);

}

const write = document.getElementById("test");


rock.addEventListener("click", userPlay);
paper.addEventListener("click", userPlay);
scissors.addEventListener("click", userPlay);