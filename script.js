let playerHealth = 10;
let aiHealth = 10;

function makeChoice(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerChoice, aiChoice);
    updateHealth(result);

    document.getElementById('result').innerHTML = `Player chose ${playerChoice}, AI chose ${aiChoice}. ${result}`;

    if (playerHealth === 0 || aiHealth === 0) {
        endGame();
    }
}

function determineWinner(playerChoice, aiChoice) {
    if (
        (playerChoice === 'rock' && aiChoice === 'scissors') ||
        (playerChoice === 'paper' && aiChoice === 'rock') ||
        (playerChoice === 'scissors' && aiChoice === 'paper')
    ) {
        return 'Player wins!';
    } else if (playerChoice === aiChoice) {
        return 'It\'s a tie!';
    } else {
        return 'AI wins!';
    }
}

function updateHealth(result) {
    if (result.includes('Player')) {
        aiHealth--;
    } else if (result.includes('AI')) {
        playerHealth--;
    }

    updateHealthBar('player-health', playerHealth);
    updateHealthBar('ai-health', aiHealth);
}

function updateHealthBar(elementId, health) {
    document.getElementById(elementId).style.width = `${health * 10}%`;
}

function endGame() {
    if (playerHealth === 0) {
        document.getElementById('result').innerHTML = 'Game Over. AI wins!';
    } else {
        document.getElementById('result').innerHTML = 'Congratulations! You defeated the AI!';
    }

    // Disable buttons to prevent further moves
    document.querySelectorAll('button').forEach(button => button.disabled = true);
}
