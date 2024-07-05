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
    <div className="bg-gray-300 text-center">
      <div className="font-bold text-4xl pt-8 text-orange-300">
        Pokemon List
      </div>
      {pokemonData.length > 0 ? (
        pokemonData.map((data) => (
          <div key={data.id} className="bg-slate-300 m-10 p-10 rounded-2xl">
            {/* <div>ID: {data.id}</div> */}
            <div className="flex justify-between">
              <div className="flex-col">
                Name:
                <div>English: {data.name.english}</div>
                <div>Japanese: {data.name.japanese}</div>
                <div>Chinese: {data.name.chinese}</div>
                <div>French: {data.name.french}</div>
              </div>
              <div>Type: {data.type.join(", ")}</div>
              <div>
                Base Status:
                <ul>
                  {Object.entries(data.base).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default AllPokemon;