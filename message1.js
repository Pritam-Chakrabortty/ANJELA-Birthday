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
// Function to open the lightbox
function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var fullImage = document.getElementById('fullImage');
    
    lightbox.style.display = 'flex';
    fullImage.src = img.src; // Set the clicked image in full view
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
