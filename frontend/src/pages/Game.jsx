// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Head from "../components/Header.jsx";
import { Card } from "antd";

const Game = ({
  pokemonId,
  setPokemonId,
  randomPokemonPC,
  setrandomPokemonPC,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [battleLog, setBattleLog] = useState([]);
  const [battleInProgress, setBattleInProgress] = useState(false); // New state variable

  const [showDataPC, setShowDataPC] = useState(false);

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
  var { param1, param2 } = useParams();
  const playername = param1;
  console.log(playername);

  const pokemonimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${param2}.png`;

  const handleClickPC = () => {
    setShowDataPC((prev) => !prev);
    setrandomPokemonPC(() => {
      const newPokemonPC = data[Math.floor(Math.random() * data.length)];
      const randomIndex = data[newPokemonPC];
      console.log(data[Math.floor(Math.random() * data.length)].name.french);
      return newPokemonPC;
    });
  };

  let count = 0;

  const calculateDamage = (attacker, defender) => {
    const damage = attacker.base.Attack - defender.base.Defense;
    if (damage > 0) {
      // Attacker's attack is higher than defender's defense
      defender.base.Defense -= damage;
      if (defender.base.Defense < 0) {
        // Ensure defense doesn't go negative
        defender.hp += defender.base.Defense;
        defender.base.Defense = 0;
      }
    } else {
      // Attacker's attack is lower than defender's defense
      defender.base.Defense -= 1; // Still subtract defense
    }

    if (damage > defender.base.HP) {
      // Attacker's attack is higher than defender's HP
      defender.base.HP = 0;
    } else {
      // Attacker's attack is lower than defender's HP
      defender.base.HP -= damage;
    }
  };

  const handleAttackClick = () => {
    if (pokemonId.base.HP > 0 && randomPokemonPC.base.HP > 0) {
      // Calculate and log the attack
      calculateDamage(pokemonId, randomPokemonPC);
      if (randomPokemonPC.base.HP > 0) {
        calculateDamage(randomPokemonPC, pokemonId);
      }

      // Update battle log
      setBattleLog((prevLog) => [
        ...prevLog,
        `${pokemonId.name.english} attacks ${randomPokemonPC.name.english}`,
        `${pokemonId.name.english}: Defense=${pokemonId.base.Defense}, HP=${pokemonId.base.HP}`,
        `${randomPokemonPC.name.english}: Defense=${randomPokemonPC.base.Defense}, HP=${randomPokemonPC.base.HP}`,
      ]);

      calculateDamage(randomPokemonPC, pokemonId);
      setBattleLog((prevLog) => [
        ...prevLog,
        `${randomPokemonPC.name.english} attacks ${pokemonId.name.english}`,
        `${randomPokemonPC.name.english}: Defense=${randomPokemonPC.base.Defense}, HP=${randomPokemonPC.base.HP}`,
        `${pokemonId.name.english}: Defense=${pokemonId.base.Defense}, HP=${pokemonId.base.HP}`,
      ]);

      // Check if any Pokémon's HP is 0
      if (pokemonId.base.HP === 0 || randomPokemonPC.base.HP === 0) {
        setBattleInProgress(false); // Disable the button
      }
    } else {
      // Battle ended, determine winner
      setBattleInProgress(false);
      if (pokemonId.base.HP === 0 && randomPokemonPC.base.HP === 0) {
        setBattleLog((prevLog) => [...prevLog, "It's a tie!"]);
      } else if (pokemonId.base.HP === 0) {
        setBattleLog((prevLog) => [
          ...prevLog,
          `${randomPokemonPC.name.english} wins!`,
        ]);
      } else if (randomPokemonPC.base.HP === 0) {
        setBattleLog((prevLog) => [
          ...prevLog,
          `${pokemonId.name.english} wins!`,
        ]);
      }
    }
  };

  const determineAttackOrder = () => {
    // Compare speeds to determine attack order
    if (pokemonId.base.Speed > randomPokemonPC.base.Speed) {
      // Human player (pokemonId) attacks first
      while (pokemonId.base.HP > 0 && randomPokemonPC.base.HP > 0) {
        calculateDamage(pokemonId, randomPokemonPC);
        if (randomPokemonPC.base.HP > 0) {
          calculateDamage(randomPokemonPC, pokemonId);
        }
      }
    } else {
      // PC player (randomPokemonPC) attacks first
      while (pokemonId.base.HP > 0 && randomPokemonPC.base.HP > 0) {
        calculateDamage(randomPokemonPC, pokemonId);
        if (pokemonId.base.HP > 0) {
          calculateDamage(pokemonId, randomPokemonPC);
        }
      }
    }

    // Determine the winner
    if (pokemonId.base.HP === 0 && randomPokemonPC.base.HP === 0) {
      setBattleLog([...battleLog, "It's a tie!"]);
    } else if (pokemonId.base.HP === 0) {
      setBattleLog([...battleLog, `${randomPokemonPC.name.english} wins!`]);
    } else if (randomPokemonPC.base.HP === 0) {
      setBattleLog([...battleLog, `${pokemonId.name.english} wins!`]);
    }
  };

  return (
    // Container code

    <>
      <Head player={playername} />
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
                  <div className="flex justify-evenly">
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img src={pokemonimg} alt="pic" />}
                    >
                      <div className="div_left">
                        <strong className="mt-3">{playername} pokemon:</strong>
                        <div className="border border-slate-300 ">
                          {pokemonId.base &&
                            Object.entries(pokemonId.name)?.map(
                              (item, index) => (
                                <li key={index}>
                                  {item[0]} : {item[1]}
                                </li>
                              )
                            )}
                          {pokemonId.base &&
                            Object.entries(pokemonId.type)?.map(
                              (item, index) => (
                                <li key={index}>
                                  {item[0]} : {item[1]}
                                </li>
                              )
                            )}
                          {pokemonId.base &&
                            Object.entries(pokemonId.base)?.map(
                              (item, index) => (
                                <li key={index}>
                                  {item[0]} : {item[1]}
                                </li>
                              )
                            )}
                        </div>
                      </div>
                    </Card>

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
                <div></div>
              </div>
            </div>

            {/* <button
            onClick={determineAttackOrder}
            className="handleClick bg-red-700 text-white rounded w-auto p-2"
          >
            Start Battle!
          </button> */}
            <div className="mt-4 mb-4 space-y-2 rounded bg-blue-500 p-5">
              <h3 className="text-left text-white">
                <strong>Battle Log...</strong>
              </h3>
              {/* Render battle log */}
              <ul className="text-white">
                {battleLog.map((entry, index) => (
                  <div className="h-auto bg-sky-950 mt-4 gap-5 p-6 rounded-lg overscroll-auto">
                    <li key={index}>{entry}</li>
                  </div>
                ))}
              </ul>
              {/* Button to initiate attack */}
              {!battleInProgress && (
                <button
                  className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  text-white rounded w-auto p-2"
                  onClick={() => setBattleInProgress(true)}
                >
                  Battle!
                </button>
              )}

              {/* Button to perform attack */}
              {battleInProgress && (
                <button
                  className="handleClick bg-red-700 hover:bg-red-600 focus:outline-none focus:ring text-white rounded w-auto p-2"
                  onClick={handleAttackClick}
                >
                  Attack
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
