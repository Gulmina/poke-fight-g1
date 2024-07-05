import "./index.css";

import Home from "./pages/Home";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon.jsx";
import Pokemoninfo from "./pages/Pokemoninfo.jsx";
import { Routes, Route } from "react-router-dom";
/* import Player from "./pages/Player.jsx"; */

//import "semantic-ui-css/semantic.min.css";
import FooterSocialApp from "./components/Footer.jsx";

import Leaderboard from "./components/Leaderboard.jsx";

///inetrface//

import { Flex, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 420,
  lineHeight: "120px",
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
  backgroundColor: "#4096ff",
};

function App() {
  return (
    <>
      <div className="bg-gray-500 px-56 py-16">
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Header style={headerStyle}>
              <Home />
            </Header>
            <Content style={contentStyle}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Allpokemon />} />
                <Route path="/pokemon/:id" element={<Singlepokemon />} />
                <Route path="/pokemon/:id/:info" element={<Pokemoninfo />} />
                {/*  <Route path="/pokemon/playerselect" element={<Player />} /> */}
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
