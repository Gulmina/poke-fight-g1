import React, { useState, useEffect } from "react";
import axios from "axios";
import "@blueprintjs/table/lib/css/table.css";
import { Cell, Column, Table } from "@blueprintjs/table";

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
    <div className="border-solid border-2 border-indigo-600 p-8">
      <h1 className="text-center text-4xl p-6">Scores Borad</h1>
      <ul className="bg-slate-50 grid grid-cols-4">
        {games.map((game) => (
          <li
            key={game._id}
            className="border-solid border-2 border-indigo-200 rounded-md p-2 text-lg "
          >
            <strong>{game.name}</strong> <li>Winns : {game.winner}</li>
            <li>Defeated : {game.loser}</li>
            {/* {game.games} games. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
