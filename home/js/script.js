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

    // Gallery Slider Functionality
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Event Listeners for Slide Navigation
    document.querySelector(".prev-slide")?.addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });

    document.querySelector(".next-slide")?.addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });
});
