import React from "react";
import "../index.css"; // For AOS and Tailwind styles
import AOS from "aos";
import "aos/dist/aos.css";

const GameBoard = ({ board, isPlayerX, gameOver, winner, handleClick, resetGame,winningLine }) => {
  // Initialize AOS animations
  React.useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS for animations
  }, []);

  return (
    <div className="game-board p-4 max-w-3xl mx-auto mt-6 h-screen">
      {/* Game status and turn indicator */}
      <div className="game-status text-center mb-6">
        <h2 className="text-xl text-white">
          {gameOver ? winner : `Player ${isPlayerX ? "X" : "O"}'s Turn`}
        </h2>
      </div>

      {/* Game grid */}
      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell w-24 h-24 flex items-center justify-center text-5xl font-black cursor-pointer transform transition-all duration-300 ease-in-out ${cell ? "bg-gray-600 " : "bg-gray-500 text-black"} 
              hover:scale-110 hover:bg-gray-700 ${
                winningLine.includes(index) ?"animate-ping":""}  ${cell === "X" ? "text-blue-500" : "text-green-500"}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      {/* Play Again Button */}
      {gameOver && (
        <div className="mt-4 text-center">
          <button
            className="btn btn-primary py-2 px-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-white font-semibold"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
