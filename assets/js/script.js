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
 
}

function handlecardclick() {
    
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