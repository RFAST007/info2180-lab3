//loads after the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // gets all divs inside the board and adds the class "square" to each
    const squares = document.querySelectorAll("#board div");
    squares.forEach(function(square) {
        square.classList.add("square");

    console.log(square);
    })
});