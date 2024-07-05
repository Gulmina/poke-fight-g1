import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import startBattle from "./Startbattle.jsx";
import { Link } from "react-router-dom";
//import backgroundimg from "../components/Background.jsx";

const Singlepokemon = ({ pokemonId, setpokemonId }) => {
  const { id } = useParams();
  // console.log(id);

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
  return (
    <>
      <div className="bg-gray-300 text-center border">
        <h1>Single Pokemon Data</h1>
        <p>
          <strong>ID:</strong> {pokemonId.id}
        </p>

        <p>
          <strong>Name :</strong>
          {pokemonId.name &&
            Object.values(pokemonId.name)?.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
        </p>
        <p>
          <strong>BASE :</strong>
          {pokemonId.base &&
            Object.entries(pokemonId.base)?.map((item, index) => (
              <li key={index}>
                {item[0]} : {item[1]}
              </li>
            ))}
        </p>
        <p>
          <strong>Type:</strong> {pokemonId?.type}
        </p>
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
