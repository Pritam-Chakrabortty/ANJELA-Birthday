document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
});

function createFloatingHearts() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    }
}

function showMessage(message) {
    const messageDisplay = document.getElementById('message-display');
    messageDisplay.innerHTML = message;
}
