import { useState, useEffect } from 'react';

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const calculateWinner = (squares) => {
  for (const [a, b, c] of winningCombinations) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return { winner: null, line: [] };
};

const minimax = (currentBoard, depth, isMaximizing) => {
  const { winner } = calculateWinner(currentBoard);
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (currentBoard.every((square) => square !== null)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        currentBoard[i] = 'O';
        const score = minimax(currentBoard, depth + 1, false);
        currentBoard[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        currentBoard[i] = 'X';
        const score = minimax(currentBoard, depth + 1, true);
        currentBoard[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const getBestMove = (currentBoard) => {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < 9; i++) {
    if (currentBoard[i] === null) {
      currentBoard[i] = 'O';
      const score = minimax(currentBoard, 0, false);
      currentBoard[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameMode, setGameMode] = useState('2P');
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });

  const { winner, line: winLine } = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const makeMove = (index, player) => {
    const nextBoard = board.slice();
    nextBoard[index] = player;
    setBoard(nextBoard);

    const { winner: moveWinner } = calculateWinner(nextBoard);
    const moveDraw = !moveWinner && nextBoard.every((sq) => sq !== null);

    if (moveWinner) {
      setScores((prev) => ({ ...prev, [moveWinner]: prev[moveWinner] + 1 }));
    } else if (moveDraw) {
      setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
    }

    setIsXNext(player === 'O');
  };

  const handleClick = (index) => {
    if (board[index] || winner || (gameMode === '1P' && !isXNext)) return;
    makeMove(index, isXNext ? 'X' : 'O');
  };

  useEffect(() => {
    if (gameMode === '1P' && !isXNext && !winner && !isDraw) {
      const timer = setTimeout(() => {
        const bestMove = getBestMove(board);
        if (bestMove !== -1) {
          makeMove(bestMove, 'O');
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [board, isXNext, gameMode, winner, isDraw]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const handleModeChange = (mode) => {
    setGameMode(mode);
    setScores({ X: 0, O: 0, ties: 0 });
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden text-slate-100 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))] flex flex-col justify-between">
      
      {/* Integrated Header Navbar */}
      <header className="h-16 shrink-0 border-b border-slate-800/80 px-6 flex items-center justify-between bg-slate-900/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-tight text-lg text-slate-100">
            TicTacToe
          </span>
        </div>

        {/* Mode Switcher */}
        <div className="bg-slate-900 border border-slate-800 p-1 rounded-xl flex gap-1">
          <button
            onClick={() => handleModeChange('2P')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              gameMode === '2P'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2 Players
          </button>
          <button
            onClick={() => handleModeChange('1P')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              gameMode === '1P'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            vs AI (Minimax)
          </button>
        </div>
      </header>

      {/* Main Play Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 gap-4 min-h-0">
        
        {/* Status Indicator */}
        <div className="text-center shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                winner ? 'bg-emerald-400' : isDraw ? 'bg-amber-400' : 'bg-indigo-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                winner ? 'bg-emerald-500' : isDraw ? 'bg-amber-500' : 'bg-indigo-500'
              }`} />
            </span>
            <p className="text-sm font-semibold tracking-wide text-slate-300">
              {winner ? (
                <span className="text-emerald-400">Winner: Player {winner} 🎉</span>
              ) : isDraw ? (
                <span className="text-amber-400">Game ended in a draw! 🤝</span>
              ) : (
                `Turn: ${isXNext ? 'Player X' : gameMode === '1P' ? 'AI (O)' : 'Player O'}`
              )}
            </p>
          </div>
        </div>

        {/* Score Board */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs shrink-0 text-center">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Player X</div>
            <div className="text-lg font-black text-emerald-400">{scores.X}</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Ties</div>
            <div className="text-lg font-black text-amber-400">{scores.ties}</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2">
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              {gameMode === '1P' ? 'AI (O)' : 'Player O'}
            </div>
            <div className="text-lg font-black text-cyan-400">{scores.O}</div>
          </div>
        </div>

        {/* Board: Constrained smoothly using viewport metrics so it never causes scroll */}
        <div className="w-[min(70vw,360px)] h-[min(70vw,360px)] max-h-[42vh] aspect-square rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 grid grid-cols-3 grid-rows-3 gap-2.5 p-3 shadow-2xl shadow-indigo-500/5 shrink-0">
          {board.map((value, index) => {
            const isWinningSquare = winLine.includes(index);
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                disabled={gameMode === '1P' && !isXNext}
                className={`w-full h-full border text-3xl sm:text-5xl font-black flex items-center justify-center rounded-xl transition-all duration-200 active:scale-95 shadow-inner disabled:cursor-not-allowed ${
                  isWinningSquare
                    ? 'bg-indigo-600/30 border-indigo-400/80 ring-2 ring-indigo-400/50'
                    : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/50'
                }`}
              >
                <span
                  className={
                    value === 'X'
                      ? 'text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                      : 'text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                  }
                >
                  {value}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="shrink-0">
          <button
            onClick={resetGame}
            className="px-5 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Reset Board
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-8 shrink-0 border-t border-slate-900 text-[11px] text-slate-500 flex items-center justify-center">
        Powered by React &amp; Minimax AI
      </footer>
    </div>
  );
}