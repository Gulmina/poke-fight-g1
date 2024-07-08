import React from "react";
import { Link } from "react-router-dom";

const Savegame = ({ player, win, lost }) => {
  console.log(player, win, lost);
  const newdata = {
    name: `${player}`,
    winner: `${win}`,
    loser: `${lost}`,
    games: 1,
  };

  const handleClick = (message) => {
    const response = fetch("http://localhost:8000/game/savegame", {
      method: "POST",
      body: JSON.stringify(message),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (response.status !== 201) {
      throw new Error("Faield to post");
    }
    const post = response.json();
    console.log(post);
    return post;
  };
  return (
    <>
      <div>
        <Link to={"/"}>
          <button
            className="border-solid border-2 border-indigo-200 rounded-md p-2 text-lg"
            onClick={() => handleClick(newdata)}
          >
            End Game
          </button>
        </Link>
      </div>
    </>
  );
};

export default Savegame;
