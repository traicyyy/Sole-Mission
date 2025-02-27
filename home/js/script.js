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

    if (slider && slides.length > 0 && prevButton && nextButton && dotsContainer) {
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
            slideIndex = (slideIndex + step + slides.length) % slides.length;
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
            autoScroll = setInterval(autoSlide, 3000);
        }

        prevButton.addEventListener("click", () => moveSlide(-1));
        nextButton.addEventListener("click", () => moveSlide(1));

        const sliderContainer = document.querySelector(".slider-container");
        if (sliderContainer) {
            sliderContainer.addEventListener("mouseenter", () => clearInterval(autoScroll));
            sliderContainer.addEventListener("mouseleave", resetAutoScroll);
        }

        // Initialize slider
        updateSlider();
        autoScroll = setInterval(autoSlide, 3000);
    }

    // TERMS AND CONDITIONS MODAL
    const modal = document.getElementById("termsModal");
    const openBtn = document.getElementById("openTerms");
    const closeBtn = document.querySelector(".close");

    if (modal) {
        modal.style.display = "none";

        if (openBtn && closeBtn) {
            openBtn.addEventListener("click", function (event) {
                event.preventDefault();
                modal.style.display = "flex";
            });

            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
            });

            // Close modal when clicking outside
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    }
});
