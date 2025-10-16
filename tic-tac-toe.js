//loads after the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // gets all divs inside the board and adds the class "square" to each
    const squares = document.querySelectorAll("#board div");
    squares.forEach(function(square) {
        square.classList.add("square");

    console.log(square);
    })
});

/* When a square is clicked, it should display an "X" or an "O", depending on whose turn it is.
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
});*/


/* hover effect to indicate which square is being hovered over
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
});*/

// Check for a win after each move and the full main code together
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const board = document.getElementById('board');
    const newButton = document.querySelector('.btn');
    let hov = document.getElementById('hover');
    let currentPlayer = 'X';
    let trackGame = []; // Track X/O in each square
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    let gameOver = false;

    // hover effect to indicate which square is being hovered over
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

    // When a square is clicked, it should display an "X" or an "O", depending on whose turn it is.
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

    // Check for a win
    function checkWinner() {
        const values = Array.from(squares).map(s => s.textContent);
        for (const [a,b,c] of winningCombos) {
            if (values[a] && values[a] === values[b] && values[a] === values[c]) {
                const winner = values[a];
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add('you-won');
                board.style.pointerEvents = 'none'; // stop further moves
                gameOver = true;
                return true;
            }
        }
        return false;
    }

    // run check after each click (this listener runs after the existing click handlers)
    squares.forEach(function(square) {
        square.addEventListener('click', function() {
            if (gameOver==false) {
                checkWinner();
            }
        });
    });

    newButton.addEventListener('click', function() {
        // Clear all squares
        squares.forEach(function(square) {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        // Reset status message
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');
        // Re-enable board interaction
        board.style.pointerEvents = 'auto';
        gameOver = false;
    currentPlayer = 'X'; // Reset to player X's turn
        
    }
    );
});


/*document.addEventListener('DOMContentLoaded', function() {
    const newButton = document.querySelector('.btn'); // selects the first element with class "btn"
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const board = document.getElementById('board');
    newButton.addEventListener('click', function() {
        // Clear all squares
        squares.forEach(function(square) {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        // Reset status message
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove('you-won');
        // Re-enable board interaction
        board.style.pointerEvents = 'auto';
        gameOver = false;
        
        
    }
    );
});*/