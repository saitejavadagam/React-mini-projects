import { useState } from 'react';

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const calculateWinner = (squares) => {
        for (const [a, b, c] of winningCombinations) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every((square) => square != null);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const nextBoard = board.slice();
        nextBoard[index] = isXNext ? 'X' : 'O';
        setBoard(nextBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="min-h-screen text-slate-100 flex flex-col justify-center items-center gap-6 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-wide mb-2">Tic Tac Toe</h1>
                <p className="text-lg font-medium text-slate-400">
                    {winner ? (
                        <span className="text-emerald-400 font-bold">Winner: {winner} 🎉</span>
                    ) : isDraw ? (
                        <span className="text-amber-400 font-bold">It's a Draw! 🤝</span>
                    ) : (
                        `Next Player: ${isXNext ? 'X' : 'O'}`
                    )}
                </p>
            </div>

            <div className="h-96 w-96 md:h-140 md:w-140 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 grid grid-cols-3 grid-rows-3 gap-3 p-4 shadow-2xl shadow-indigo-500/10">
                {board.map((value, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className="w-full h-full bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 text-4xl md:text-8xl font-black flex items-center justify-center rounded-xl transition-all duration-200 active:scale-95 shadow-inner"
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
                ))}
            </div>

            <button
                onClick={resetGame}
                className="px-6 py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-semibold tracking-wide transition-all duration-200 hover:shadow-lg active:scale-95"
            >
                Reset Game
            </button>
        </div>
    );
}