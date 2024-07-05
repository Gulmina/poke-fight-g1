import {useState} from 'react'
import "./index.css";
import Home from "./pages/Home";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon.jsx";
import Pokemoninfo from "./pages/Pokemoninfo";
import Game from "./pages/Game.jsx";
import Playerselect from "./pages/Playerselect.jsx";

/* import Player from "./pages/Player.jsx"; */

import { Routes, Route } from "react-router-dom";

function App() {
  const [pokemonId, setpokemonId] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [allData, setAllData] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Allpokemon allData={allData} setAllData={setAllData} />} />
        <Route path="/pokemon/:id" element={<Singlepokemon setpokemonId={setpokemonId} pokemonId={pokemonId} />} />
        <Route path="/pokemon/:id/:info" element={<Pokemoninfo pokemonData={pokemonData} setPokemonData={setPokemonData} />} />
         <Route path="/pokemon/game" element={<Game pokemonId={pokemonId} />} />
         <Route path="/pokemon/players" element={<Playerselect />} />
        <Route path="/*" element={<div>Error</div>} />
      </Routes>
    </>
  );
}
export default App;
