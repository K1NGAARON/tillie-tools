// JavaScript function for the slideshow
let currentSlide = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

// Automatically advance to the next slide every 3 seconds
function autoAdvance() {
    showSlide(currentSlide + 1);
}

// Start the slideshow
showSlide(currentSlide);
setInterval(autoAdvance, 3000);