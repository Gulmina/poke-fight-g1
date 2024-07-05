// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Game = ({ pokemonId, setPokemonId }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [showDataPC, setShowDataPC] = useState(false);
  const [randomPokemonPC, setrandomPokemonPC] = useState([]);

  const handleFetch = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/pokemon`);

      setData(res.data);
    } catch (error) {
      setError(error);
      console.error("Nothing found");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleClickPC = () => {
    setShowDataPC((prev) => !prev);
    setrandomPokemonPC(() => {
      const newPokemonPC = data[Math.floor(Math.random() * data.length)];
      return newPokemonPC;
    });
  };

  

  //

  return (
    // Container code
    <div className="Game">
      <div className="w-auto bg-blue-200 p-8">
        <div className="h-auto bg-white p-6 rounded-lg overscroll-auto">
          <div className="flex items-center space-x-4 mb-4"></div>
          <div className="flex flex-row">
            <div>
              <img
                src="../src/assets/Pokemon-Logo-PNG-Image-File-3440649988.png"
                alt="pokemon logo"
                width={100}
              />
            </div>
            <div>
              <h1 className="text-slate-400 font-black text-5xl ml-4">
                Battle Game
              </h1>
            </div>
          </div>

          <button
            className="mb-4 handleClick border-red-500 bg-yellow-500 text-white mt-5 rounded w-auto p-5"
            onClick={handleClickPC}
          >
            Click to Reveal PC Selection!
          </button>
          {/* PC & Trainer View*/}
          <div className="mb-4 space-y-2 rounded bg-blue-500 p-10">
            <div>
              <h3 className="mb-6 text-3xl text-white text-center">
                Pokemon in Battle!
              </h3>
              <div>



              <div class="flex justify-evenly">
              <div className="div_left">
                <strong className="mt-3">Trainer's pokemon:</strong>
                {pokemonId.base &&
                  Object.entries(pokemonId.name)?.map((item, index) => (
                    <li key={index}>
                      {item[0]} : {item[1]}
                    </li>
                  ))}
                {pokemonId.base &&
                  Object.entries(pokemonId.type)?.map((item, index) => (
                    <li key={index}>
                      {item[0]} : {item[1]}
                    </li>
                  ))}
                {pokemonId.base &&
                  Object.entries(pokemonId.base)?.map((item, index) => (
                    <li key={index}>
                      {item[0]} : {item[1]}
                    </li>
                  ))}
              </div>

            <div className="div_right ml-10">
              <strong className="mt-3">PCs's pokemon:</strong>

              {showDataPC && (
                <p>
                  PC has selected{" "}
                  <strong>{randomPokemonPC.name.english}</strong>
                </p>
              )}
              {showDataPC && (
                <li>
                  {randomPokemonPC.name.english} has an id of{" "}
                  {randomPokemonPC.id}
                </li>
              )}
              {showDataPC && (
                <li>
                  {randomPokemonPC.name.english} has a type of{" "}
                  {randomPokemonPC.type}
                </li>
              )}
              {showDataPC && (
                <li>
                  {randomPokemonPC.name.english}'s health is{" "}
                  {randomPokemonPC.base.HP}
                </li>
              )}
              {showDataPC && (
                <li>
                  {randomPokemonPC.name.english} has an attack of{" "}
                  {randomPokemonPC.base.Attack}
                </li>
              )}
              {showDataPC && (
                <li>
                  {randomPokemonPC.name.english} has a defense of{" "}
                  {randomPokemonPC.base.Defense}
                </li>
              )}
              {showDataPC && (
                <li>
                  {randomPokemonPC.name.english}'s speed is{" "}
                  {randomPokemonPC.base.Speed}
                </li>
              )}
            </div>

            </div>


          </div>
          <div>

              </div>
            </div>
</div>

            <button className="handleClick bg-red-700 text-white rounded w-auto p-2">
              Start Battle!
            </button>
          </div>
        </div>
      </div>

  );
};

export default Game;
