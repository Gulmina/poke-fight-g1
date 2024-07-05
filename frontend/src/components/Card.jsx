import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [pokemonpic, setPokemonpic] = useState([]);
  const [pp, setPp] = useState([]);
  const img =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        // console.log(res);
        setPokemonpic(res.data.results);

        /*   const p = pokemonpic.map((pic, index) => {
          // pic[0].name;
        }); */
        console.log(pokemonpic);
        //console.log(pp);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const picArray = pokemonpic?.map((e) => e.name);

  return (
    <div>
      {pokemonpic.map((pokemon) => (
        <div key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img src={img} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default Card;
