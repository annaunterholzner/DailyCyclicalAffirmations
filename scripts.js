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

document.addEventListener('DOMContentLoaded', function () {
    const cards = [
        { imageSrc: 'card1.png', text: 'Affirmation 1' },
        { imageSrc: 'card2.png', text: 'Affirmation 2' },
        { imageSrc: 'card3.png', text: 'Affirmation 3' },
        { imageSrc: 'card4.png', text: 'Affirmation 4' }
    ];

    const cardContainer = document.getElementById('card-container');

    cards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const cardImage = document.createElement('img');
        cardImage.src = card.imageSrc;
        cardImage.alt = 'Card Image';
        cardElement.appendChild(cardImage);

        const cardText = document.createElement('p');
        cardText.innerText = card.text;
        cardElement.appendChild(cardText);

        cardContainer.appendChild(cardElement);
    });
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

