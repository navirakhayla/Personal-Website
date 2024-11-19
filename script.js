let currentIndex = 0;

const photos = document.querySelectorAll(".photo-slider .photo");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

function updateSlider() {
    photos.forEach((photo, index) => {
        photo.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateSlider();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateSlider();
});

// Initialize slider
updateSlider();
