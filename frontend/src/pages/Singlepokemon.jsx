import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import backgroundimg from "../components/Background.jsx";

const Singlepokemon = () => {
  const [pokemonId, setpokemonId] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getpokemondata = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pokemon/${id}`);
      console.log(response.data);

      setpokemonId(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  //const pokemonbase = pokemonId.base;

  useEffect(() => {
    getpokemondata();
  }, []);
  console.log(pokemonId);
  return (
    
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
     
  );
};

export default Singlepokemon;
