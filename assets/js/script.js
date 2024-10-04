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



function shuffle() {

}

function updatescore() {
    
}

function updatetimer() {
    
}

function formatTime() {
    
}

function updatetimeinterval() {
    
}

function setBacksideImage() {
    
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