// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Game = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [showDataHuman, setShowDataHuman] = useState(false);
  const [showDataPC, setShowDataPC] = useState(false);

  const [randomPokemonHuman, setrandomPokemonHuman] = useState({});
  const [randomPokemonPC, setrandomPokemonPC] = useState({});

   //Pokemon Players in Game
   const trainers = ["Dominic", "Gulmina", "Vladimir", "Ali"];


  const handleFetch = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/pokemon`);
      // console.log(res.data[0].name.english);
      setData(res.data);
    } catch (error) {
      setError(error);
      // console.error("Nothing found");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleClickHuman = () => {

    // Toggle the message display
    // const randomPokemonHuman = data[Math.floor(Math.random() * data.length)];
    console.log(randomPokemonHuman);
    // setrandomPokemonHuman(arr);
    // const x = (data[randomPokemonHuman]);
    //This is same as line below setShowData((prev)=> { return !prev});
    setShowDataHuman((prev) => !prev);
    setrandomPokemonHuman(() => {
      const newPokemonHuman = data[Math.floor(Math.random() * data.length)];
      return newPokemonHuman;
    });
  };

  const handleClickPC = () => {
    setShowDataPC((prev) => !prev);
    setrandomPokemonPC(() => {
      const newPokemonPC = data[Math.floor(Math.random() * data.length)];
      return newPokemonPC;
    });
  };

  //start battle logic
  function startBattle() {
      const rand = Math.floor(Math.random() * data.length)
      console.log(data[rand]);

  }
//


  return (
    // Container code
    <div className="Game">
      <div className="flex bg-blue-200 p-8">
        <div className="h-screen bg-white p-6 rounded-lg overscroll-auto">
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

          {/* Player Selection code */}
          <div className="">
            <p className="text-2xl mt-10 mb-4">Choose your trainer:</p>
          
            {trainers?.map((trainer) => (
              <div>
              <ul className="" key={trainer}>
                <li className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4">
                  <button key={trainer}>
                    {trainer}
                  </button>
                </li>
              </ul>
              </div>
            ))}
          </div>

          <div>
            <button
              className="handleClick border-red-500 bg-green-700 text-white mt-5 rounded w-auto p-5"
              onClick={handleClickHuman}
            >
              Randomly Choose a Pokemon!
            </button>
          </div>
          <div>
            <button
              className="handleClick border-red-500 bg-yellow-500 text-white mt-5 rounded w-auto p-5"
              onClick={handleClickPC}
            >
              Click to Reveal PC Selection!
            </button>
          </div>
        <div className="rounded mt-4 flex bg-blue-200 p-2">
        <div className=" bg-white p-2 rounded-lg">
          <div>
            <button
              className="handleClick border-red-500 bg-pink-800 text-white rounded w-auto p-2">
              Start Battle!
            </button>
            </div>
            </div>
          </div>
        </div>


             {/* Human/Trainer View */}
        <div className="space-y-2 rounded bg-blue-500 p-10">
          <h3 className="mt-5 mb-3 text-3xl text-white">Pokemon in Battle!</h3>
            <strong className="mt-3">Player's pokemon:</strong>
            {showDataHuman && 
            <p>You have selected <strong>{randomPokemonHuman.name.english}</strong></p>}
            {showDataHuman && <p>{randomPokemonHuman.name.english} has an id of {randomPokemonHuman.id}</p>}
            {showDataHuman && <p>{randomPokemonHuman.name.english} has a type of {randomPokemonHuman.type}</p>} 
            {showDataHuman && <p>{randomPokemonHuman.name.english}'s health is {randomPokemonHuman.base.HP}</p>} 
            {showDataHuman && <p>{randomPokemonHuman.name.english} has an attack of {randomPokemonHuman.base.Attack}</p>}
            {showDataHuman && <p>{randomPokemonHuman.name.english} has a defense of {randomPokemonHuman.base.Defense}</p>}  
            {showDataHuman && <p>{randomPokemonHuman.name.english}'s speed is {randomPokemonHuman.base.Speed}</p>}  
 
        </div>

              {/* PC View */}
        <div className="space-y-2 rounded bg-blue-500 p-10">
          <h3 className="mt-5 mb-3 text-3xl text-white">Pokemon in Battle!</h3>
            <strong className="mt-3">PCs's pokemon:</strong>
            {showDataPC && 
            <p>You have selected <strong>{randomPokemonPC.name.english}</strong></p>}
            {showDataPC && <p>{randomPokemonPC.name.english} has an id of {randomPokemonPC.id}</p>}
            {showDataPC && <p>{randomPokemonPC.name.english} has a type of {randomPokemonPC.type}</p>} 
            {showDataPC && <p>{randomPokemonPC.name.english}'s health is {randomPokemonPC.base.HP}</p>} 
            {showDataPC && <p>{randomPokemonPC.name.english} has an attack of {randomPokemonPC.base.Attack}</p>}
            {showDataPC && <p>{randomPokemonPC.name.english} has a defense of {randomPokemonPC.base.Defense}</p>}  
            {showDataPC && <p>{randomPokemonPC.name.english}'s speed is {randomPokemonPC.base.Speed}</p>}  
            
        </div>

        <div>

        </div>

      </div>
    </div>
  );
};

export default Game;