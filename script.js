const container = document.querySelector('.falling-hearts');

// Path to your PNG heart image
const heartImage = 'Heart.png'; // Heart.png should be in the same directory as this script or provide the correct path.

function createHeart() {
    const heart = document.createElement('img');
    heart.src = heartImage;
    heart.className = 'heart-fall';

    // Random horizontal position
    heart.style.left = Math.random() * 100 + 'vw';

    // Random size between 20px and 40px
    const size = Math.random() * 20 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Random animation duration between 2s and 5s
    const duration = Math.random() * 3 + 2;
    heart.style.animation = `fall ${duration}s linear forwards`;

    container.appendChild(heart);

    // Remove the heart after it falls
    setTimeout(() => heart.remove(), duration * 1000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);
