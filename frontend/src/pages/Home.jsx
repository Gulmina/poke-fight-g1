import React from "react";
import ball from "../assets/Ball.png";
import mineball from "../assets/MineBall.png";
import { Link } from "react-router-dom";

//BG = #70a7b9
//BTN = #0bc778

const Home = () => {
  return (
    <>
      <body className="h-fit">
        <div className="w-screen h-screen flex justify-center items-center min-h-fit">
          <div className="bg-blue-400 border-blue-500 shadow-2xl flex flex-col justify-center items-center h-fit border-4 t-10 rounded-3xl">
            <header className="flex flex-col justify-center items-center">
              <h1 className="text-center text-6xl mt-10 mx-2 text-gray font-medium">
                Pokemon Battles
              </h1>
              <img className="mb-9 mt-9 min-w-fit" src={ball} alt="Pokemon Ball" />
              <Link to={`/pokemon`}>
                <button className="text-4xl font-medium pb-1 shadow-xl duration-300 hover:bg-red-600 bg-green-500 text-white rounded-3xl  w-40 h-12">
                  Start
                </button>
              </Link>
              <Link to={`/pokemon/game/leaderboard`}>
                <button className="text-4xl font-medium pb-1 shadow-xl duration-300 hover:bg-red-600 bg-green-500 text-white rounded-3xl  w-60 h-12 mt-5">
                  Leaderboard
                </button>
              </Link>
            </header>
            <footer className="flex pt-28 pl-10 items-center sticky bottom-0 ">
              <p className="">Powerd by GroupOne</p>
              <img className="p-5" src={mineball} alt="Minecrft Pokemon Ball" />
            </footer>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
