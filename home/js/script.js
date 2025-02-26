document.addEventListener("DOMContentLoaded", function () {
    // Navigation link active state
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Gallery slider function
let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (!slider || totalSlides === 0) return;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    let offset = -currentIndex * 100;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${offset}%)`;
}

