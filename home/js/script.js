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
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots-container");
    let slideIndex = 0;
    let autoScroll;

    // Generate dots dynamically
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => jumpToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        slider.style.transform = `translateX(${-slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function moveSlide(step) {
        slideIndex += step;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        if (slideIndex >= slides.length) slideIndex = 0;
        updateSlider();
        resetAutoScroll();
    }

    function jumpToSlide(index) {
        slideIndex = index;
        updateSlider();
        resetAutoScroll();
    }

    function autoSlide() {
        moveSlide(1);
    }

    function resetAutoScroll() {
        clearInterval(autoScroll);
        autoScroll = setInterval(autoSlide, 2000);
    }

    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));

    document.querySelector(".slider-container").addEventListener("mouseenter", () => clearInterval(autoScroll));
    document.querySelector(".slider-container").addEventListener("mouseleave", resetAutoScroll);

    // Initialize slider
    updateSlider();
    autoScroll = setInterval(autoSlide, 2000);
});