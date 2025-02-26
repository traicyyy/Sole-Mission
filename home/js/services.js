const services = [
    {
        name: "Deep Clean",
        image: "images/service1.png",
        price: "Starts at ₱350.00",
        description: "A thorough cleaning of uppers, midsoles, outsoles, insoles, sockliners, and laces to remove dirt and stains.",
    },
    {
        name: "Sole Unyellowing",
        image: "images/service2.png",
        price: "₱750.00",
        description: "Restore yellowed soles to their original clarity using advanced whitening techniques for a fresh, new look.",
    },
    {
        name: "Full Repaint",
        image: "images/service3.png",
        price: "Starts at ₱1,200 (Cleaning included)",
        description: "A complete color restoration to bring back your shoes’ original vibrancy or give them a fresh, new look.",
    },
    {
        name: "Full Outsole Reglue",
        image: "images/service4.png",
        price: "Starts at ₱1,200",
        description: "Repair and reattach loose or detached outsoles to restore durability and prevent further damage.",
    },
    {
        name: "Full Midsole Reglue",
        image: "images/service5.png",
        price: "Starts at ₱1,500",
        description: "Secure and reinforce midsoles to ensure long-lasting wear and improved structural integrity.",
    },
    {
        name: "Sole Replacement",
        image: "images/service6.png",
        price: "Starts at ₱3,500 (Cleaning included)",
        description: "Replace worn-out soles with high-quality materials for better traction, comfort, and longevity.",
    },
    {
        name: "Sole Stitch",
        image: "images/service7.png",
        price: "₱300.00",
        description: "Strengthen and reinforce soles with professional stitching to extend the life of your footwear.",
    },
    {
        name: "Partial Repaint",
        image: "images/service8.png",
        price: "Starts at ₱300",
        description: "Touch up scuffed or faded areas for a refreshed look while maintaining the original design.",
    },
    {
        name: "Partial Reglue",
        image: "images/service9.png",
        price: "Starts at ₱400",
        description: "Fix minor sole detachments to prevent further separation and improve overall shoe durability.",
    }   
];

const servicesList = document.getElementById("services-list");

services.forEach(service => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");

    serviceCard.innerHTML = `
        <div class="service-image">
            <img src="${service.image}" alt="${service.name}">
        </div>
        <div class="service-info">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p class="price">Starts at ${service.price}</p>
            <a href="book-now.html" class="text-button">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    `;

    servicesList.appendChild(serviceCard);
});
