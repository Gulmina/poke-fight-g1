import React, { useState, useEffect } from "react";
import axios from "axios";
import "@blueprintjs/table/lib/css/table.css";
import { Cell, Column, Table } from "@blueprintjs/table";

import Head from "./Header";
const Leaderboard = () => {
  const [games, setGames] = useState([]);

  /*   async function deleteData(item) {
    const response = await fetch(
      "http://localhost:8000/game/delete" + "/" + item,
      {
        method: "delete",
      }
    );
    return await response.json();
  } */
  const newdata = {
    name: "Dominic",
    winner: 1,
    loser: 0,
    games: 1,
  };
  async function postdata(newdata) {
    const response = await fetch("http://localhost:8000/game/savegame", {
      method: "POST",
      body: JSON.stringify(newdata),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (response.status !== 201) {
      throw new Error("Faield to post");
    }
    const post = await response.json();
    console.log(post);
    return post;
  }

  /*   async function totalwins(item) {
    const response = await fetch(
      "http://localhost:8000/game/totalwinner" + "/" + item,
      {
        method: "get",
      }
    );
    return await response.json();
  }
  console.log(); */

  useEffect(() => {
    const fetchGames = async () => {
      const res = await axios.get("http://localhost:8000/game/gameinfo/");
      setGames(res.data);
    };
    fetchGames();
  }, []);

  return (
    <>
      <Head />
      <div className="border-solid border-2 border-indigo-600 p-8">
        <h1 className="text-center text-4xl p-6">Scores Borad</h1>
        <button onClick={postdata(newdata)}>SAVE</button>
        <ul className="bg-slate-50 grid grid-cols-4">
          {games.map((game) => (
            <li
              key={game._id}
              className="border-solid border-2 border-indigo-200 rounded-md p-2 text-lg "
            >
              <strong>{game.name}</strong> <li>Winns : {game.winner}</li>
              <li>Defeated : {game.loser}</li>
              {/*   {game.games} */}
              {/*   <button
              onclick={deleteData(game._id)}
              className="border-solid border-2 border-indigo-200"
            >
              Delete
            </button> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Leaderboard;
