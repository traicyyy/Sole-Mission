document.addEventListener("DOMContentLoaded", function () {
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);


    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    const bookNowButtons = document.querySelectorAll(".book-now-btn");
    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "book-now.html";
        });
    });

    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots-container");
    let slideIndex = 0;
    let autoScroll;

    if (slider && slides.length > 0 && prevButton && nextButton && dotsContainer) {
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

        const modal = document.getElementById("termsModal");
        const openBtn = document.getElementById("openTerms");
        const closeBtn = document.querySelector(".close");
        const termsPages = document.querySelectorAll(".terms-page");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const modalContent = document.querySelector(".modal-content");
        let currentIndex = 0;
    
        function updateModalPage() {
            termsPages.forEach((page, index) => {
                page.style.display = index === currentIndex ? "block" : "none";
            });
    
            // Scroll to the top of the modal content when changing pages
            modalContent.scrollTop = 0;
    
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === termsPages.length - 1;
        }
    
        if (modal) {
            modal.style.display = "none";
    
            if (openBtn && closeBtn) {
                openBtn.addEventListener("click", function (event) {
                    event.preventDefault();
                    modal.style.display = "flex";
                    currentIndex = 0;
                    updateModalPage();
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
    
            // Navigation event listeners
            prevBtn.addEventListener("click", function () {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateModalPage();
                }
            });
    
            nextBtn.addEventListener("click", function () {
                if (currentIndex < termsPages.length - 1) {
                    currentIndex++;
                    updateModalPage();
                }
            });
        }
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".star").forEach(star => {
            star.addEventListener("click", function() {
                document.querySelectorAll(".star").forEach(s => s.textContent = "⭐");
                let rating = this.getAttribute("data-value");
                for (let i = 0; i < rating; i++) {
                    document.querySelectorAll(".star")[i].textContent = "🌟";
                }
                document.getElementById("reviewForm").setAttribute("data-rating", rating);
            });
        });
        
        document.getElementById("submitBtn").addEventListener("click", function() {
            let name = document.getElementById("name").value;
            let rating = document.getElementById("reviewForm").getAttribute("data-rating") || "0";
            let comments = document.getElementById("comments").value;
            let reviewHTML = `<div class='border p-3 rounded mb-2 shadow-md'>
                <strong>${name || "Anonymous"}</strong> - ${"🌟".repeat(rating)}
                <p>${comments || "No comments provided."}</p>
            </div>`;
            document.getElementById("reviews").innerHTML += reviewHTML;
        });
        loadReviews();
    });

document.addEventListener("DOMContentLoaded", function() {

    loadReviews();
});

function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("soleMissionReviews")) || [];
    const reviewsContainer = document.getElementById("reviews");
    reviewsContainer.innerHTML = "";

    reviews.forEach(review => {
        const reviewHTML = `<div class='border p-3 rounded mb-2 shadow-md'>
            <strong>${review.name || "Anonymous"}</strong> - ${"🌟".repeat(review.rating)}
            <p>${review.comments || "No comments provided."}</p>
        </div>`;
        reviewsContainer.innerHTML += reviewHTML;
    });
}

document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function() {
        document.querySelectorAll(".star").forEach(s => s.textContent = "⭐");
        let rating = this.getAttribute("data-value");
        for (let i = 0; i < rating; i++) {
            document.querySelectorAll(".star")[i].textContent = "🌟";
        }
        document.getElementById("reviewForm").setAttribute("data-rating", rating);
    });
});

document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let rating = document.getElementById("reviewForm").getAttribute("data-rating") || "0";
    let comments = document.getElementById("comments").value;

    let reviews = JSON.parse(localStorage.getItem("soleMissionReviews")) || [];

    reviews.push({ name, rating, comments });

    localStorage.setItem("soleMissionReviews", JSON.stringify(reviews));

    loadReviews();

    document.getElementById("name").value = "";
    document.getElementById("comments").value = "";

    document.querySelectorAll(".star").forEach(s => s.textContent = "⭐");
    document.getElementById("reviewForm").removeAttribute("data-rating");
});
    
