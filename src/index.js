import './index.scss';
import Board from "./modules/board";
import {createElements} from "./modules/start";

const app = document.getElementById('app');

const boardClass = new Board();
const board = boardClass.getBoard();
createElements(board);

app.addEventListener('click', (el) => {
  const target = event.target;
  if (!target.classList.contains('chip')) return;
  const x = +getComputedStyle(target).getPropertyValue('--x');
  const y = +getComputedStyle(target).getPropertyValue('--y');
  const newPosition = boardClass.moveElement(x, y);
  if (!newPosition) return;
  board[newPosition.x][newPosition.y].changePosition(newPosition);
})