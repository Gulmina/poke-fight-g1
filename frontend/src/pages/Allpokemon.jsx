import axios from "axios";
import React, { useState, useEffect } from "react";

const AllPokemon = () => {
  const [Allpokemondata, setAllpokemondata] = useState([]);

  const getAllpokemondata = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pokemon`);
      console.log(response.data);
      setAllpokemondata(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getAllpokemondata();
  }, []);
  return (
    <div>
      <ul>
        {Allpokemondata?.map((e) => (
          <li>Pokemon Id: {e.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllPokemon;
