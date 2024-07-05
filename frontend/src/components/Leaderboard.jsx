import React, { useState, useEffect } from "react";
import axios from "axios";
import "@blueprintjs/table/lib/css/table.css";

import { Column, Table } from "@blueprintjs/table";

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
      <h1 className="text-center text-lg">High Scorer Borad</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            {game.name} : {game.winner} defeated {game.loser} lost in{" "}
            {game.games} games.
          </li>
        ))}
      </ul>

      {/*  {games.map((game) => (
        <Table numRows={1}>
          <Column name={game.name} />
        </Table>
      ))} */}
    </div>
  );
};

export default Leaderboard;
