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

    // Add event listeners to service booking buttons
    const bookNowButtons = document.querySelectorAll(".book-now-btn");
    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "book-now.html";
        });
    });

    // GALLERY SLIDER FUNCTION
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const sliderContainer = document.querySelector(".slider-container");
    const slider = document.querySelector(".slider");
    let slideIndex = 0;
    let autoScroll;

    // Only run if gallery exists
    if (slides.length > 0 && slider && dots.length > 0) {
        function updateSlider() {
            slider.style.transform = `translateX(${-slideIndex * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove("active"));
            dots[slideIndex].classList.add("active");
        }

        function moveSlide(step) {
            slideIndex += step;
            if (slideIndex < 0) slideIndex = dots.length - 1;
            if (slideIndex >= dots.length) slideIndex = 0;
            updateSlider();
        }

        function jumpToSlide(index) {
            slideIndex = index;
            updateSlider();
        }

        function autoSlide() {
            moveSlide(1);
        }

        // Auto-scroll every 5 seconds
        autoScroll = setInterval(autoSlide, 5000);

        // Pause auto-scroll when hovering over the gallery
        sliderContainer.addEventListener("mouseenter", () => {
            clearInterval(autoScroll);
        });

        sliderContainer.addEventListener("mouseleave", () => {
            autoScroll = setInterval(autoSlide, 5000);
        });

        // Initialize slider
        updateSlider();
    }
});
