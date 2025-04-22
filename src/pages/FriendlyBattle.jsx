// components/FriendlyBattle.js
import React from "react";
import GameBoard from "../components/GameBoard";
import GameStatus from "../components/GameStatus";
import useGameLogic from "../components/useGameLogic";
import BackToHomeButton from "../components/BackToHomeButton";

const FriendlyBattle = () => {
  const { board, isPlayerX, gameOver, winner, handleClick, resetGame,winningLine } = useGameLogic();

  return (
    <div className="friendly-battle h-screen flex flex-col items-center justify-center pt-16">
      <h1 className="text-center text-3xl font-black text-white mb-6">Friendly Battle</h1>
      {/* <GameStatus gameOver={gameOver} winner={winner} isPlayerX={isPlayerX} /> */}
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

export default FriendlyBattle;
