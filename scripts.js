// Function to show the desired section and hide the others
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Remove active class from all menu items
  const menuItems = document.querySelectorAll(".menu-bar h1");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Show the selected section and set active menu item
  document.getElementById(sectionId).style.display = "block";
  document.querySelector(`.menu-bar h1[data-section="${sectionId}"]`).classList.add("active");
}

// Ensure the "home" section is shown when the page loads
window.addEventListener("DOMContentLoaded", function () {
  showSection("home");
});

const cardContainer = document.getElementById("card-container");
const numCards = 33; // Total number of cards (front1.png to front33.png)
let cards = [];

// Generate card elements
function generateCards() {
  cardContainer.innerHTML = ""; // Clear existing cards
  cards = [];
  for (let i = 1; i <= numCards; i++) { // Loop through front1.png to front33.png
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.front = `front${i}.png`; // Set data attribute for front image
    cardContainer.appendChild(card); // Add card to container
    cards.push(card); // Add card to array
  }
  shuffleCards(); // Arrange cards
}

// Shuffle cards randomly in a circular layout
function shuffleCards() {
  // Shuffle the array of cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap cards[i] with cards[j]
  }

  cards.forEach((card) => {
    card.style.transform = ""; // Reset transform
    card.classList.remove("selected"); // Remove selected class
  });

  const radius = 200; // Circular layout radius
  const centerX = cardContainer.clientWidth / 2;
  const centerY = cardContainer.clientHeight / 2;
  const angleStep = (2 * Math.PI) / numCards;

  cards.forEach((card, index) => {
    const angle = index * angleStep;
    const x = centerX + radius * Math.cos(angle) - card.offsetWidth / 2;
    const y = centerY + radius * Math.sin(angle) - card.offsetHeight / 2;
    card.style.left = `${x}px`; // Center cards horizontally
    card.style.top = `${y}px`; // Center cards vertically
  });
}

// Handle card click event to reveal front image
function handleCardClick(event) {
  if (event.target.classList.contains("card")) {
    const card = event.target;
    card.classList.add("selected"); // Enlarge and bring to front
    card.style.background = `url('${card.dataset.front}') no-repeat center`; // Show front image
    card.style.backgroundSize = 'cover'; // Ensure image covers card
    card.style.zIndex = 10;

    // Disable clicking on other cards
    cards.forEach((c) => c.removeEventListener("click", handleCardClick));
  }
}

// Initialize the game by generating cards and adding event listeners
function initGame() {
  generateCards();
  cardContainer.addEventListener("click", handleCardClick);
}

// Start the game when the page loads
window.onload = initGame;

// Shuffle cards when "Pick a Card" button is clicked
document.querySelector(".menu-bar").addEventListener("click", function (event) {
  if (event.target.textContent === "Pick a Card") {
    generateCards(); // Reshuffle cards
  }
});



