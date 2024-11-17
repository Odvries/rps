const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
const outCome = ['Draw', 'Computer wins', 'You win'];

let humanScore = 0;
let computerScore = 0;
let round = 1;
let humanSelection = 0;

function getComputerChoice () {
    // 0 rock 1 paper 2 scissors
    return  Math.floor(Math.random() * 3) ;
}

function getHumanChoice () {
    // 0 rock 1 paper 2 scissors
    do {
        choice = prompt("Rock (0) Paper (1) Scissors (2)?");
        if (choice === null) return -1;
        else if (choice != '0' && choice != '1' && choice != '2') {
            console.error("Please enter 0,1 or 2");
        }
    }
    while (choice != '0' && choice != '1' && choice != '2');

    return parseInt(choice);
}

function playRound (humanChoice, computerChoice) {
    // 0 draw 1 computer 2 human
    let result = 0;

    if (humanChoice === 0) result = computerChoice;
    if (humanChoice === 1) result = computerChoice === 0 ? 2 : 1;
    if (humanChoice === 2) result = computerChoice === 0 ? 1 : 2;

    if (result === 1) computerScore++;
    if (result === 2) humanScore++;

    console.log(outCome[result]);

}

// main
while (humanSelection != -1 && round <= 5) {
    humanSelection = getHumanChoice();

    if (humanSelection != -1) {

        const computerSelection = getComputerChoice();

        console.log(`You: ${rockPaperScissors[humanSelection]} Computer: ${rockPaperScissors[computerSelection]}`);
        
        playRound(humanSelection, computerSelection);

        console.log(`Score: You ${humanScore} Computer ${computerScore}`);

        round++;
    }

} 

humanSelection === -1 ? console.log(`Game aborted.`) : console.log(`Game over. ${humanScore > computerScore ? outCome[2] : outCome[1]} !`);

