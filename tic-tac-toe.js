//loads after the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // gets all divs inside the board and adds the class "square" to each
    const squares = document.querySelectorAll("#board div");
    squares.forEach(function(square) {
        square.classList.add("square");

    console.log(square);
    })
});

// When a square is clicked, it should display an "X" or an "O", depending on whose turn it is.
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


// hover effect to indicate which square is being hovered over
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let hov = document.getElementById('hover');
    squares.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            if (square.textContent == "") { // Only show hover if square is empty
                square.classList.add('hover');
            }
        });
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });
});
