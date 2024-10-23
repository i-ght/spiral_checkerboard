const canvas = document.getElementById("coordinateSystem");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "darkgrey";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const squareSize = 64; // Size of each square
const rows = 8; // Number of rows
const cols = 8; // Number of columns

const coordinates = new Set();

// Function to draw the grid and label coordinates
function drawGrid() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            ctx.strokeStyle = "darkgrey";
            ctx.strokeRect(col * squareSize, row * squareSize, squareSize, squareSize);
            
            // Label the coordinates
            ctx.fillStyle = "black";
            ctx.fillText(`(${col},${row})`, col * squareSize + 10, row * squareSize + 30);
            coordinates.add([row, col]);
        }
    }
}

// Function to fill a square based on coordinates and outline it
function fillSquare(x, y, color, outlineColor) {
    ctx.fillStyle = color;
    ctx.fillRect(x * squareSize, y * squareSize, squareSize, squareSize);
    
    // Draw the outline
    ctx.strokeStyle = outlineColor;
    ctx.strokeRect(x * squareSize, y * squareSize, squareSize, squareSize);
}

// Draw the grid with labels
drawGrid();

const whites = [
    [3, 3],
    [4, 4],
    [2, 3],
    [5, 4],
    [5, 3],
    [2, 4],
    [6, 3],
    [1, 4],
    [6, 2],
    [1, 5],
    [5, 2],
    [2, 5],
    [5, 1],
    [2, 6],
    [4, 1],
    [3, 6],
    [4, 0],
    [3, 7],
    [3, 0],
    [2, 0],
    [4, 7],
    [5, 7],
    [1, 0],
    [6, 7],
    [1, 1],
    [6, 6],
    [0, 1],
    [7, 6],
    [0, 2],
    [7, 5],
    [0, 7],
    [7, 0]
];

const blacks = [
    [4, 3],
    [3, 4],
];

const filled = new Set();

for (const [x, y] of blacks) {
    fillSquare(x, y, "black", "white"); // Fill black and outline with white
    filled.add(JSON.stringify([x, y]));
}
for (const [x, y] of whites) {
    fillSquare(x, y, "white", "black"); // Fill white and outline with black
    filled.add(JSON.stringify([x, y]));
}
for (const [x, y] of coordinates) {
    if (!filled.has(JSON.stringify([x, y]))) {
        fillSquare(x, y, "black", "white"); // Fill remaining squares black and outline with white
    }
}
