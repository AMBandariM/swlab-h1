let timer = 0;  // TODO :: to be implemented
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Test
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById('result');
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    let message = `شما: ${emojis[player]} | کامپیوتر: ${emojis[computer]} | `;
    if (result === 'win') message += '🏆 شما بردید!';
    else if (result === 'lose') message += '💻 کامپیوتر برد!';
    else message += '🤝 مساوی!';
    resultDiv.textContent = message;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
