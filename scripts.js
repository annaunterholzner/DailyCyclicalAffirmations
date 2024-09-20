function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none"; // Hide all sections
  });

  // Hide all menu items' active state
  const menuItems = document.querySelectorAll(".menu-bar h1");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Show the selected section and set active menu item
  document.getElementById(sectionId).style.display = "block";
  document
    .querySelector(`.menu-bar h1[onclick="showSection('${sectionId}')"]`)
    .classList.add("active");
}

// JavaScript for the game and menu navigation

const cardContainer = document.getElementById("card-container");
const numCards = 33; // Number of cards
let cards = [];

// Generate card elements
function generateCards() {
  cardContainer.innerHTML = "";
  cards = [];
  for (let i = 0; i < numCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = i;
    cardContainer.appendChild(card);
    cards.push(card);
  }
  shuffleCards();
}

// Shuffle cards randomly
function shuffleCards() {
  cards.forEach((card) => {
    card.style.transform = "";
    card.classList.remove("selected");
  });

  const radius = 200; // Radius of the circle
  const angleStep = (2 * Math.PI) / numCards;
  cards.forEach((card, index) => {
    const angle = index * angleStep;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    card.style.left = `${50 + x}px`; // Centering horizontally
    card.style.top = `${50 + y}px`; // Centering vertically
  });
}

// Handle card click
function handleCardClick(event) {
  if (event.target.classList.contains("card")) {
    const card = event.target;
    card.classList.add("selected");
    card.style.zIndex = 10; // Bring to front

    // Disable all other cards
    cards.forEach((c) => c.removeEventListener("click", handleCardClick));
  }
}

// Initialize the game
function initGame() {
  generateCards();
  cardContainer.addEventListener("click", handleCardClick);
}

// Start game on load
window.onload = initGame;

// Shuffle cards on "Pick a Card" section refresh
document.querySelector(".menu-bar").addEventListener("click", function (event) {
  if (event.target.textContent === "Pick a Card") {
    generateCards();
  }
});

// Function to handle menu navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

