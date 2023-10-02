import { Board, Cell, setCell } from './board';

export function setCellByCPU(board: Board, cell: Cell): Board {
  const newBoard = structuredClone(board);
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (newBoard[y][x] === null) {
        setCell(newBoard, [x, y], cell);
        return newBoard;
      }
    }
  }
  return newBoard;
}
