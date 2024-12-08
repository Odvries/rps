const ROCK          = 0;
const PAPER         = 1;
const SCISSORS      = 2;
const WINNING_SCORE = 5;
    
const COMPUTER_WINS = 0;
const HUMAN_WINS    = 1;

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
const outComeText       = ['Computer wins', 'You win'];

let humanScore     = 0;
let computerScore  = 0;

const bRock      = document.querySelector("#rock");
const bPaper     = document.querySelector("#paper");
const bScissors  = document.querySelector("#scissors");
const human      = document.querySelector("#human");
const computer   = document.querySelector("#computer");
const resultText =  document.querySelector("#gameresult");


bRock.addEventListener("click", function(){
    playRound(0, getComputerChoice());
});

bPaper.addEventListener("click", function(){
    playRound(1, getComputerChoice());
});

bScissors.addEventListener("click", function(){
    playRound(2, getComputerChoice());
});

function getComputerChoice () {
    // 0=rock 1=paper 2=scissors
    return Math.floor(Math.random() * 3) ;
}

function playRound (humanChoice, computerChoice) {

    // 0 rock 1 paper 2 scissors
    if (humanChoice === ROCK) result = computerChoice === PAPER ? COMPUTER_WINS: HUMAN_WINS;
    if (humanChoice === PAPER) result = computerChoice === SCISSORS ? COMPUTER_WINS: HUMAN_WINS;
    if (humanChoice === SCISSORS) result = computerChoice === ROCK ? COMPUTER_WINS: HUMAN_WINS;

    if (result === COMPUTER_WINS) computerScore++;
    if (result === HUMAN_WINS) humanScore++;

    human.textContent = humanScore;
    computer.textContent = computerScore;

    resultText.textContent = `You: ${rockPaperScissors[humanChoice]} Computer: ${rockPaperScissors[computerChoice]} ` + outComeText[result];

    if (humanScore >= WINNING_SCORE) outcome = HUMAN_WINS;
    if (computerScore >= WINNING_SCORE) outcome = COMPUTER_WINS;

    if (humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        alert(`Game over. ${outComeText[outcome]} !`);
        humanScore     = 0;
        computerScore  = 0;
        human.textContent = humanScore;
        computer.textContent = computerScore;        
        resultText.textContent = '';
    };

}

// eof