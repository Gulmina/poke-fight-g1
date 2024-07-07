import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;

import img from "../components/Card.jsx";

function AllPokemon({ allData, setAllData }) {
  const playerId = useParams();

  // const [data, setData] = useState([]);
  //console.log(playerId);
  const [pokemonpic, setPokemonpic] = useState([]);
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
  const getpokemonpic = async () => {
    try {
      const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
      const newdata = response.data.results;
      const pokemonurl = newdata.map((pokemon) => pokemon.url);
      setPokemonpic(pokemonurl);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getpokemonpic();
  }, []);



  // const img = allData.map((e) => e.id);
  return (
    <div className="bg-gray-300 text-center">
      <div className="font-bold text-4xl pt-8 text-orange-300">
        <strong className="text-black"> {playerId.id} </strong>
        <p>pick your favourite Pokemon for the battle</p>
      </div>

      {allData.length > 0 ? (
        allData.map((pokemon) => (
          <div key={pokemon.id}>
            <Link to={`/pokemon/players/${playerId.id}/${pokemon.id}`}>
              <div className="grid grid-cols-2 p-4 justify-items-center border border-slate-300 hover:border-indigo-300  rounded-lg m-4 bg-neutral-400">
                <div>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <img
                        src={pokemonpic.map((e) => e.id)}
                        alt={pokemon.name}
                      />
                    }
                  >
                    <div>
                      <h3>
                        <strong>Name</strong>
                      </h3>
                      <ul>
                        <li>{pokemon.name.english}</li>
                        <li> {pokemon.name.japanese}</li>
                        <li>{pokemon.name.chinese}</li>
                        <li>{pokemon.name.french}</li>
                      </ul>
                    </div>
                  </Card>
                </div>
                <div className="flex-row ">
                  <div className=" flex-row  border-none p-2 text-lg">
                    <strong>Description</strong>
                  </div>
                  <div className=" flex-row  border-2 p-8 m-8 bg-white">
                    <strong>Type:</strong> {pokemon.type.join(", ")}
                  </div>
                  <div className=" flex-row  border-2 p-8 m-8 bg-white ">
                    <strong>Base Status:</strong>
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
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default AllPokemon;
