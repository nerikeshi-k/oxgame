import { Board, Cell, setCell } from './board';
import { readInput } from './io';

export async function setCellByUser(board: Board, cell: Cell): Promise<Board> {
  const line = await readInput('x,y >');
  const [x, y] = line.split(',').map(Number);
  if (x == null || y == null) {
    throw new Error('x,yの形式で入力してください');
  }
  return setCell(board, [x, y], cell);
}
