# Minesweeper Solver Tampermonkey Script

This Tampermonkey script is designed to solve boards on minesweeper.online. It adds a button to the page that, when clicked, opens an external link showing the current state of the board, the probabilities, and which cells are safe and which ones are not.

## Features

- **Board Solver**: Solves the current Minesweeper board.
- **Probability Calculation**: Calculates the probability of each cell being a mine.
- **Safety Indicator**: Indicates which cells are safe and which ones are not.

## How to Use

1. Install the Tampermonkey extension in your browser.
2. Click on the Tampermonkey icon and select "Create a new script..."
3. Delete any code in the script editor and replace it with the code from this repository.
4. Save the script and navigate to minesweeper.online.
5. Select a board and click on the "Click me to solve" button that appears.

The script will scrape the webpage data, encode it into a URL, and open a new tab to a Minesweeper solver website.
