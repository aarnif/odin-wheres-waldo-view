import GameCharacters from "../Games/GameCharacters";

const GameStartModal = ({ game, startNewGame }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-10">
      <div className="overflow-auto w-[700px] h-[460px] p-12 flex flex-col justify-center items-center bg-slate-800 rounded-xl text-slate-100 z-100">
        <h1 className="w-full mb-8 flex-grow text-3xl font-bold text-center">
          Find the following characters:
        </h1>
        <GameCharacters game={game} location={"modal"} />
        <div className="w-full flex-grow flex justify-center items-center">
          <button
            onClick={startNewGame}
            className="w-full flex-grow max-w-[200px] h-[80px] bg-slate-900 rounded-xl text-xl font-bold
          hover:bg-black active:scale-95 transition"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameStartModal;