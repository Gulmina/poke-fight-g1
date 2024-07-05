import React, { useState, useEffect } from "react";
import axios from "axios";

function AllPokemon() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/pokemon")
      .then((res) => {
        console.log(res);
        setPokemonData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div>Pokemon List</div>

      {pokemonData.kength ? (
        <div>
          <ul>
            {pokemonData?.map((e) => (
              <li>Pokemon Id: {e.id}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default AllPokemon;
