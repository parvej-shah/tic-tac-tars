// components/TarsGame.js
import React from "react";
import GameBoard from "../components/GameBoard";
import GameStatus from "../components/GameStatus";
import useGameLogic from "../components/useGameLogic";
import BackToHomeButton from "../components/BackToHomeButton";
const TarsGame = () => {
  const { board, isPlayerX, gameOver, winner, handleClick, resetGame,winningLine} = useGameLogic(true);

  return (
    <div className="tars-game h-screen flex flex-col items-center justify-center pt-16">
      <h1 className="text-center font-black text-3xl text-white mb-6">TARS Game</h1>
      <GameBoard
        board={board}
        isPlayerX={isPlayerX}
        gameOver={gameOver}
        winner={winner}
        handleClick={handleClick}
        resetGame={resetGame}
        winningLine={winningLine}
      />
      <BackToHomeButton></BackToHomeButton>
    </div>
  );
};

export default TarsGame;
