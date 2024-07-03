import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get("http://localhost:8000/game/gameinfo");
      setGames(res.data);
    };
    fetchGames();
  }, []);

  return (
    <div className="border-solid border-2 border-indigo-600">
      <h1 className="text-center text-lg">High Scorer Borad</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            {game.name} : {game.winner} defeated {game.loser} lost in{" "}
            {game.games} games.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
