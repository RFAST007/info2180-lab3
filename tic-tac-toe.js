//loads after the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // gets all divs inside the board and adds the class "square" to each
    const squares = document.querySelectorAll("#board div");
    squares.forEach(function(square) {
        square.classList.add("square");

    console.log(square);
    })
});

document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let trackGame = []; // Track X/O in each square

    squares.forEach(function(square, index) {
        square.addEventListener('click', function() {
            if (square.textContent=="") { // Only allow click if square is empty
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                trackGame[index] = currentPlayer;

                // Alternate player
                //currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                if (currentPlayer === 'X') {
                    currentPlayer = 'O';
                } else {
                    currentPlayer = 'X';
                }
            }

        
    console.log(square)
        });
    });
});


