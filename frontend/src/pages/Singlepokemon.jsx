import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import backgroundimg from "../components/Background.jsx";
import { Card } from "antd";

const Singlepokemon = ({ pokemonId, setpokemonId }) => {
  const { id } = useParams();
  const [pokemonpic, setPokemonpic] = useState([]);
  console.log(id);

  const getpokemondata = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pokemon/${id}`);
      setpokemonId(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getpokemondata();
  }, []);

  const pokemonimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <>
      <div className="grid grid-cols-2 p-4 justify-items-center border border-slate-300 hover:border-indigo-300  rounded-lg m-4 bg-neutral-400">
        <div>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img src={pokemonimg} alt="pic" />}
          >
            <div>
              <strong>Name :</strong>
              {pokemonId.name &&
                Object.values(pokemonId.name)?.map((item, index) => (
                  <li key={index}> {item} </li>
                ))}
            </div>
          </Card>
        </div>
        <div className="flex-row ">
          <div className=" flex-row  border-none p-2 text-lg">
            <strong>Description</strong>
          </div>
          <div className=" flex-row  border-2 p-8 m-8 bg-white">
            <strong>Type:</strong> {pokemonId.type}
          </div>
          <div className=" flex-row  border-2 p-8 m-8 bg-white ">
            <strong>BASE :</strong>
            {pokemonId.base &&
              Object.entries(pokemonId.base)?.map((item, index) => (
                <li key={index}>
                  {item[0]} : {item[1]}
                </li>
              ))}
          </div>
        </div>
      </div>

      <div className=" justify-center items-center mt-5">
        <Link to={`/pokemon/game`}>
          {/* <a href="http://localhost:5173/pokemon/game"> */}
          <button className="handleClick bg-red-700 text-white rounded w-auto p-2">
            Go to Arena
          </button>
          {/* </a> */}
        </Link>
      </div>
    </>
  );
};

export default Singlepokemon;
