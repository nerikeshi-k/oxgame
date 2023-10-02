import { createNewBoard, judgeWhoWins, showBoardStatus } from './board';
import { setCellByCPU } from './cpu';
import { setCellByUser } from './user';

async function main() {
  console.log('⭕❌ゲーム');

  let board = createNewBoard();
  while (true) {
    showBoardStatus(board);

    try {
      board = await setCellByUser(board, '⭕');
    } catch (error) {
      console.error(error);
      continue;
    }
    showBoardStatus(board);
    {
      const winner = judgeWhoWins(board);
      if (winner != null) {
        console.log(`${winner}の勝ちです`);
        break;
      }
    }

    board = await setCellByCPU(board, '❌');
    showBoardStatus(board);

    {
      const winner = judgeWhoWins(board);
      if (winner != null) {
        console.log(`${winner}の勝ちです`);
        break;
      }
    }
  }
}

await main();
