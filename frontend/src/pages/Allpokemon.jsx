import {Link} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";

function AllPokemon({allData, setAllData}) {
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/pokemon")
      .then((res) => {
        // console.log(res);
        setAllData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-500 text-center">
      <div className="font-bold text-4xl pt-8 text-orange-300">
        Pokemon List
      </div>
      {allData.length > 0 ? (
        allData.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`}>

          <div key={pokemon.id} className="bg-slate-300 m-10 p-10 rounded-2xl">
            {/* <div>ID: {data.id}</div> */}
            <div className="flex justify-between">
              <div className="flex-col">
                Name:
                <div>English: {pokemon.name.english}</div>
                <div>Japanese: {pokemon.name.japanese}</div>
                <div>Chinese: {pokemon.name.chinese}</div>
                <div>French: {pokemon.name.french}</div>
              </div>
              <div>Type: {pokemon.type.join(", ")}</div>
              <div>
                Base Status:
                <ul>
                  {Object.entries(pokemon.base).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
                  </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default AllPokemon;
