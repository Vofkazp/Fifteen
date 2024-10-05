import Chip from "./chip";

const coords = [];

export function createElements(board) {
  board.forEach((row, x) => {
    row.forEach((cell, y) => {
      coords.push({x, y});
    })
  })
  for (let i = 1; i <= 15; i++) {
    const {x, y} = getRandomPosition(board);
    board[x][y] = new Chip(i, {x, y});
  }
}

function getRandomPosition() {
  const index = Math.floor(Math.random() * coords.length);
  const element = coords[index];
  coords.splice(index, 1);
  return element;
}