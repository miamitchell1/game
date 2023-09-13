<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Battleship Game</title>
</head>
<body>
    <h1>Battleship Game</h1>
    <p>Try to sink the enemy battleship by guessing its location on the 5x5 grid.</p>
    <p>Enter row and column numbers (0-4) to make a guess.</p>
    <div id="game-board"></div>
    <script>
        // Constants
        const boardSize = 5;
        const shipSize = 3;

        // Initialize game board
        const board = [];
        for (let i = 0; i < boardSize; i++) {
            board[i] = new Array(boardSize).fill(false);
        }

        // Generate a random location for the battleship
        const shipRow = Math.floor(Math.random() * (boardSize - shipSize + 1));
        const shipCol = Math.floor(Math.random() * boardSize);

        // Game variables
        let guesses = 0;
        let isSunk = false;

        // Game loop
        while (!isSunk) {
            // Get user input
            const guessRow = parseInt(prompt('Enter the row number (0-4):'));
            const guessCol = parseInt(prompt('Enter the column number (0-4):'));

            // Check for valid input
            if (
                isNaN(guessRow) || isNaN(guessCol) ||
                guessRow < 0 || guessRow >= boardSize ||
                guessCol < 0 || guessCol >= boardSize
            ) {
                alert('Invalid input. Please enter row and column numbers between 0 and 4.');
                continue;
            }

            // Check if the guess hit the battleship
            if (guessRow === shipRow && guessCol >= shipCol && guessCol < shipCol + shipSize) {
                alert('Congratulations! You sank the battleship!');
                isSunk = true;
            } else {
                alert('Miss! Try again.');
                guesses++;
            }
        }

        // Display game statistics
        alert(`It took you ${guesses} guesses to sink the battleship.`);
    </script>
</body>
</html>
