// components/GameStatus.js
const GameStatus = ({ gameOver, winner, isPlayerX }) => {
    return (
      <div className="game-status text-center mb-6">
        <h2 className="text-xl text-white">
          {gameOver ? winner : `Player ${isPlayerX ? "X" : "O"}'s Turn`}
        </h2>
      </div>
    );
  };
  
  export default GameStatus;
  