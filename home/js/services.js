const services = [
    {
        name: "Full Repaint",
        image: "images/full-repaint.jpg",
        price: "₱1,200",
        description: "Complete repainting service to restore your footwear’s original color and vibrance.",
    },
    {
        name: "Full Outsole Reglue",
        image: "images/full-outsole-reglue.jpg",
        price: "₱1,200",
        description: "Regluing of the entire outsole to ensure durability and extended wear life.",
    },
    {
        name: "Deep Clean",
        image: "images/deep-clean.jpg",
        price: "₱350",
        description: "A thorough cleaning of uppers, midsoles, outsoles, insoles, sockliners, and laces to remove dirt and stains.",
    },
    {
        name: "Sole Unyellowing",
        image: "images/sole-unyellowing.jpg",
        price: "₱750",
        description: "Restoration process that removes yellowing and brings back the original sole color.",
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
            <a href="book-now.html" class="book-now-btn">Book Now →</a>
        </div>
    `;

    servicesList.appendChild(serviceCard);
});
