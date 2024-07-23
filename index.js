let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    let choice;
    switch(randomIndex) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
    }
    return choice;
}
console.log(getComputerChoice());

function getHumanChoice(message) {
    let choice = window.prompt(message).toLowerCase();

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert("Invalid choice, please try again.");
        return getHumanChoice(message);
    }
}

function playRound(humanChoice, computerChoice) {
    let result = '';
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    document.querySelector('#result').innerHTML = result;
    document.querySelector('#score').innerHTML = `Human Score: ${humanScore}, Computer Score: ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    let winnerMessage = '';
    if (humanScore > computerScore) {
        winnerMessage = "You are the winner of this round!";
    } else {
        winnerMessage = "Computer is the winner of this round!";
    }
    document.querySelector('#winnerAnnouncement').innerHTML = winnerMessage;

}

document.querySelector('#rock');
    rock.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        playRound('rock', computerChoice);
    }
});

document.querySelector('#paper');
    paper.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        playRound('paper', computerChoice);
    }
});

document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        playRound('scissors', computerChoice);
    }
});


