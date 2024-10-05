export default class Board {
  constructor() {
    this.board = Array.from({length: 4}, () => Array.from({length: 4}, () => 0));
  }

  getBoard() {
    return this.board;
  }

  moveElement(x, y) {
    const directions = [
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: -1 },
    ];

    for (const { dx, dy } of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (this.isValidPosition(newX, newY) && this.board[newX][newY] === 0) {
        this.board[newX][newY] = this.board[x][y];
        this.board[x][y] = 0;
        return { x: newX, y: newY };
      }
    }

    return null;
  }

  isValidPosition(x, y) {
    return x >= 0 && x < 4 && y >= 0 && y < 4;
  }
}