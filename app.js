
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 6;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) { //if game over is false (still going)
        player.score += 1; //add one to score
        if (player.score >= winningScore) {
            if (player.score >= (opponent.score + 2)) { //if that score matches the winning score, player must win by 2 for game to end
                isGameOver = true; //set game over to true
                player.display.classList.add('has-text-success');
                opponent.display.classList.add('has-text-danger');
                player.button.disabled = true;
                opponent.button.disabled = true;
            } else {
                alert('You must win by 2 or more!')
            }
        }
        player.display.innerText = player.score; //change span innerText to p1Score
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value) //we have access to the select object in here by using this
    reset();
})

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.innerText = p1.score;
    // p2.display.innerText = p2.score;
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}

