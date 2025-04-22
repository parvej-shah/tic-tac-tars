// hooks/useGameLogic.js
import { useState, useEffect } from "react";

const useGameLogic = (isTARS) => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 cells on the board
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  // Check for the winner
  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return {winner:board[a],line:line}; // Winner found ('X' or 'O')
      }
    }

    if (board.every((cell) => cell !== null)) {
      return {winner:"draw",line:[]}; // Draw if no winner and board is full
    }

    return {winner:null,line:[]};
  };

  // AI Move based on your provided if-else logic and priority
  const aiMove = () => {
    let boardCopy = [...board];

    // Check for AI winning moves (O) and block moves (X)
    const checkMove = (a, b, c, move) => {
      if (
        boardCopy[a] === move &&
        boardCopy[b] === move &&
        boardCopy[c] === null
      ) {
        return c;
      }
      if (
        boardCopy[a] === move &&
        boardCopy[c] === move &&
        boardCopy[b] === null
      ) {
        return b;
      }
      if (
        boardCopy[b] === move &&
        boardCopy[c] === move &&
        boardCopy[a] === null
      ) {
        return a;
      }
      return -1; // no winning/blocking move
    };

    // Check each condition to see if AI or player can win
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Try to win
    for (let condition of winConditions) {
      const move = checkMove(condition[0], condition[1], condition[2], "O");
      if (move !== -1) {
        boardCopy[move] = "O";
        setBoard(boardCopy);
        const {winner,line} = checkWinner(boardCopy);
        if (winner) {
          setGameOver(true);
          setWinner(
            winner === "draw" ? "It's a draw!" : `${winner} Wins!`
          );
          setWinningLine(line);
        } else {
          setIsPlayerX(!isPlayerX); // Switch turn
        }
        return;
      }
    }

    // Block player from winning
    for (let condition of winConditions) {
      const move = checkMove(condition[0], condition[1], condition[2], "X");
      if (move !== -1) {
        boardCopy[move] = "O";
        setBoard(boardCopy);
        const {winner,line} = checkWinner(boardCopy);
        if (winner) {
          setGameOver(true);
          setWinner(
            winner === "draw" ? "It's a draw!" : `${winner} Wins!`
          );
          setWinningLine(line);
        } else {
          setIsPlayerX(!isPlayerX); // Switch turn
        }
        return;
      }
    }

    // No immediate winning or blocking move, so pick strategic spots
    const priorityOrder = [4, 0, 2, 6, 8, 1, 3, 5, 7]; // 5,1,2,3,4,6,7,8,9

    // Loop through the priority order and take the first available spot
    for (let i of priorityOrder) {
      if (boardCopy[i] === null) {
        boardCopy[i] = "O";
        setBoard(boardCopy);
        const currentWinner = checkWinner(boardCopy);
        const {winner,line} = checkWinner(boardCopy);
        if (winner) {
          setGameOver(true);
          setWinner(
            winner === "draw" ? "It's a draw!" : `${winner} Wins!`
          );
          setWinningLine(line);
        } else {
          setIsPlayerX(!isPlayerX); // Switch turn
        }
        return;
      }
    }
  };

  // Handle player's move
  const handleClick = (index) => {
    if (gameOver || board[index] || (!isPlayerX && isTARS)) return;

    const newBoard = [...board];
    newBoard[index] = isPlayerX ? "X" : "O";
    setBoard(newBoard);
    const {winner,line} = checkWinner(newBoard);
        if (winner) {
          setGameOver(true);
          setWinner(
            winner === "draw" ? "It's a draw!" : `${winner} Wins!`
          );
          setWinningLine(line);
        } else {
          setIsPlayerX(!isPlayerX); // Switch turn
        }
  };

  // Effect to trigger AI's turn after player's move
  useEffect(() => {
    if (!isPlayerX && isTARS && !gameOver) {
      aiMove();
    }
  }, [isPlayerX]);

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
    setIsPlayerX(true);
    setWinner(null);
    setWinningLine([]);
  };

  return {
    board,
    isPlayerX,
    gameOver,
    winner,
    handleClick,
    resetGame,
    winningLine
  };
};

export default useGameLogic;
