export type Cell = '⭕' | '❌';
export type Board = [
  [Cell | null, Cell | null, Cell | null],
  [Cell | null, Cell | null, Cell | null],
  [Cell | null, Cell | null, Cell | null]
];

export function createNewBoard(): Board {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}

export function setCell(
  board: Board,
  [x, y]: [number, number],
  cell: Cell
): Board {
  if (board[y][x] !== null) {
    throw new Error('そこは埋まっています');
  }
  const newBoard = structuredClone(board);
  newBoard[y][x] = cell;
  return newBoard;
}

export function judgeWhoWins(board: Board): Cell | null {
  const targets: Cell[] = ['⭕', '❌'];
  for (const target of targets) {
    for (let i = 0; i < 3; i++) {
      // 横
      if (
        board[i][0] === target &&
        board[i][1] === target &&
        board[i][2] === target
      ) {
        return target;
      }
      // 縦
      if (
        board[0][i] === target &&
        board[1][i] === target &&
        board[2][i] === target
      ) {
        return target;
      }
    }
    // 斜め
    if (
      board[0][0] === target &&
      board[1][1] === target &&
      board[2][2] === target
    ) {
      return target;
    }
    if (
      board[0][2] === target &&
      board[1][1] === target &&
      board[2][0] === target
    ) {
      return target;
    }
  }
  return null;
}

export function showBoardStatus(board: Board): void {
  console.log('=====================');
  console.log('現在の盤面');
  for (const line of board) {
    console.log(line.map((c) => (c === null ? '  ' : c)).join('|'));
  }
  console.log('=====================');
}
