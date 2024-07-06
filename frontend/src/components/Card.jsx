import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const pokemonPromises = data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        });
        const pokemonDetails = await Promise.all(pokemonPromises);
        setPokemonData(pokemonDetails);
        setLoading(false);
      } catch (error) {
        setError("Error fetching Pokémon data.");
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          {pokemon.sprites && pokemon.sprites.front_default ? (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          ) : (
            <p>No image available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
