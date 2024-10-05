/*jshint esversion: 6 */

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function() {
    // Getting all the button elements
    const startgamebtn = document.getElementById('startgamebtn');
    const playagainbtn = document.getElementById('playagainbtn');
    const endgamebtn = document.getElementById('endgamebtn');
    const howToPlaybtn = document.getElementById('howToPlaybtn');

    // Event listeners for buttons
    startgamebtn.addEventListener('click', function() {
        startgame();
        startgamebtn.style.display = 'none'; 
    });

    playagainbtn.addEventListener('click', function() {
        location.reload(); // Reloading the page to restart the game
    });

    endgamebtn.addEventListener('click', function() {
        endgame();
    });

    howToPlaybtn.addEventListener('click', function() {
        instructions.classList.toggle('hidden'); // Show/hide instructions
    });

});

let score=0;
let timer=120; //setting initial timer to 2 mins(2 mins * 60 secs)
const cardcontainer=document.querySelector('.card-container');
const cards=document.querySelectorAll('.card');
let gamestarted = false; // variable to track if the game has started
let flippedCards = []; // Array to store flipped cards
let intervalId;


//shuffling an array using Fisher-Yates algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
// Converting NodeList to array
const cardsArray = Array.from(cards);

// Shuffling the array of cards
shuffle(cardsArray);

// Appending shuffled cards back to the card container
cardsArray.forEach(card => {
    cardcontainer.appendChild(card);
});
function updatescore() {
    
}

function updatetimer() {
    
}

function formatTime() {
    
}

function updatetimeinterval() {
    
}


function setBacksideImage(cardElement) {
    const backsideImage = document.createElement('img');
    backsideImage.src = 'assets/images/backside.jpg'; 
    backsideImage.alt = 'Football'; 
    backsideImage.classList.add('back'); 
    cardElement.appendChild(backsideImage);
 }

// Looping through each card and set the backside image
cards.forEach(function(card) {
    setBacksideImage(card);
});

function handlecardclick(event) {
    // do nothing  if the game has not started
    if (!gamestarted) {
        return; 
    }
    // Flipping the clicked card
    event.currentTarget.classList.toggle('flipped');
    // Remove the event listener for this card
    event.currentTarget.removeEventListener('click', handlecardclick);

    // HTML content of the clicked card
    let cardContent = event.currentTarget.innerHTML;
    
    // Adding the HTML content of the clicked card to the array of flipped cards
    flippedCards.push({ element: event.currentTarget, content: cardContent });

    
}

function startgame() {
    
}

function playagain() {
    
}

function endgame() {
    
}

function resetGame() {

}

function checkGameEnd() {

}