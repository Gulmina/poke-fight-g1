import ball from "../assets/Ball.png";
import mineball from "../assets/MineBall.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-blue-400 border-blue-500 p-10">
        <h1 className="text-center text-6xl mt-10 mx-2 text-gray font-medium">
          Pokemon Battles
        </h1>
        <img className="mb-9 mt-9 min-w-fit" src={ball} alt="Pokemon Ball" />
        <Link to={`/pokemon/players`}>
          <button className="text-4xl font-medium pb-1 shadow-xl duration-300 hover:bg-red-600 bg-green-500 text-white rounded-3xl  w-40 h-12">
            Start
          </button>
        </Link>
        <Link to={`/pokemon/game/leaderboard`}>
          <button className="text-4xl font-medium pb-1 shadow-xl duration-300 hover:bg-red-600 bg-green-500 text-white rounded-3xl  w-60 h-12 mt-5">
            Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
