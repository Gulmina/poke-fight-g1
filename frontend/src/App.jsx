import { useState } from "react";
import "././index.css";

import Home from "./pages/Home";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon.jsx";

import { Routes, Route } from "react-router-dom";

import Pokemoninfo from "./pages/Pokemoninfo";
import Game from "./pages/Game.jsx";
import Playerselect from "./pages/Playerselect.jsx";
import Startbattle from "./pages/Startbattle.jsx";
import Lb from "./components/Leaderboard.jsx";

/* import Player from "./pages/Player.jsx"; */

//import "semantic-ui-css/semantic.min.css";
import FooterSocialApp from "./components/Footer.jsx";
import Appheader from "./components/Header.jsx";

import Card from "./components/Card.jsx";
///inetrface//

import { Flex, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  /* minHeight: 50,
  lineHeight: "120px", */
  color: "black",
  backgroundColor: "#fff",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  backgroundColor: "#4Dffff",
};

function App() {
  const [pokemonId, setpokemonId] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [randomPokemonPC, setrandomPokemonPC] = useState([]);
  const [showDataPC, setShowDataPC] = useState(false);

  return (
    <>
      <div className="bg-gray-500 px-56 py-20  min-h-screen">
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/pokemon/players/:id"
                  element={
                    <Allpokemon allData={allData} setAllData={setAllData} />
                  }
                />
                <Route
                  path="/pokemon/players/:id/:id"
                  element={
                    <Singlepokemon
                      setpokemonId={setpokemonId}
                      pokemonId={pokemonId}
                    />
                  }
                />
                {/* <Route
                  path="/pokemon/:id/:info"
                  element={
                    <Pokemoninfo
                      pokemonData={pokemonData}
                      setPokemonData={setPokemonData}
                    />
                  }
                /> */}
                <Route
                  path="/pokemon/players/:id/:id/game"
                  element={
                    <Game
                      pokemonId={pokemonId}
                      randomPokemonPC={randomPokemonPC}
                      setrandomPokemonPC={setrandomPokemonPC}
                    />
                  }

                  //  path="/pokemon/players/:id/:id/game"
                  //   element={<Game pokemonId={pokemonId} />}
                />
                <Route path="/pokemon/cards" element={<Card />} />
                <Route path="/pokemon/players" element={<Playerselect />} />
                <Route path="/pokemon/game/leaderboard" element={<Lb />} />
                <Route
                  path="/pokemon/battle"
                  element={
                    <Startbattle
                      randomPokemonPC={randomPokemonPC}
                      setrandomPokemonPC={setrandomPokemonPC}
                      pokemonId={pokemonId}
                    />
                  }
                />
                <Route path="/*" element={<div>Error</div>} />
              </Routes>
            </Content>
            <Footer style={footerStyle}>
              <FooterSocialApp />
            </Footer>
          </Layout>
        </Flex>
      </div>
    </>
  );
}
export default App;
