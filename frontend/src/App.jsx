import "./index.css";
import Home from "./pages/Home";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon.jsx";
import Pokemoninfo from "./pages/Pokemoninfo";
import Game from "./pages/Game.jsx";

/* import Player from "./pages/Player.jsx"; */

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Allpokemon />} />
        <Route path="/pokemon/:id" element={<Singlepokemon />} />
        <Route path="/pokemon/:id/:info" element={<Pokemoninfo />} />
         <Route path="/pokemon/game" element={<Game />} />
        <Route path="/*" element={<div>Error</div>} />
      </Routes>
    </>
  );
}
export default App;
