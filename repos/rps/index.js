const ROCK          = 0;
const PAPER         = 1;
const SCISSORS      = 2;
const GAME_ABORTED  = -1;
const MAX_ROUNDS    = 5;
    
// 0 draw 1 computer 2 human
const DRAW          = 0;
const COMPUTER_WINS = 1;
const HUMAN_WINS    = 2;

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
const outComeText       = ['Draw', 'Computer wins', 'You win'];

let humanScore     = 0;
let computerScore  = 0;
let round          = 1;
let humanSelection;
let outcome        = DRAW;

function getComputerChoice () {
    // 0=rock 1=paper 2=scissors
    return Math.floor(Math.random() * 3) ;
}



function getHumanChoice () {
    // input 0 for rock, 1 for paper or 2 for scissors
    // or click cancel to quit the game.
    let choice;

    do {
        const getChoice = prompt("Rock (0) Paper (1) Scissors (2)?");
        if (getChoice === null) return GAME_ABORTED;
        else {
            choice = parseInt(getChoice);
            if (choice != ROCK && choice != PAPER && choice != SCISSORS) console.error("Please enter 0,1 or 2");
        }
        
    }
    while (choice != ROCK && choice != PAPER && choice != SCISSORS);

    return choice;
}



function playRound (humanChoice, computerChoice) {

    let result = DRAW;

    // 0 rock 1 paper 2 scissors
    if (humanChoice === ROCK) result = computerChoice === PAPER ? COMPUTER_WINS: HUMAN_WINS;
    if (humanChoice === PAPER) result = computerChoice === SCISSORS ? COMPUTER_WINS: HUMAN_WINS;
    if (humanChoice === SCISSORS) result = computerChoice === ROCK ? COMPUTER_WINS: HUMAN_WINS;

    if (result === COMPUTER_WINS) computerScore++;
    if (result === HUMAN_WINS) humanScore++;

    console.log(outComeText[result]);

}


// main
while (humanSelection != GAME_ABORTED && round <= MAX_ROUNDS) {
    humanSelection = getHumanChoice();

    if (humanSelection != GAME_ABORTED) {

        const computerSelection = getComputerChoice();

        console.log(`You: ${rockPaperScissors[humanSelection]} Computer: ${rockPaperScissors[computerSelection]}`);
        
        playRound(humanSelection, computerSelection);

        console.log(`Score: You ${humanScore} Computer ${computerScore}`);

        round++;
    }

} 

if (humanSelection === GAME_ABORTED) console.log(`Game aborted.`)
else {

    if (humanScore === computerScore) outcome = DRAW
    else 
        if (humanScore >= computerScore) outcome = HUMAN_WINS 
        else outcome = COMPUTER_WINS;
        

    console.log(`Game over. ${outComeText[outcome]} !`);
}

// eof