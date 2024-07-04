import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import App from "../App";

const Pokemoninfo = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { info } = useParams();
  const navigate = useNavigate();

  const handleFetch = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/pokemon/${id}/${info}`);
      console.log(res.data);
      setPokemonData(res.data);
    } catch (error) {
      setError(error);
      console.error("Nothing found");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen flex-col">
      <div>
        {pokemonData ? (
          <div>
          {pokemonData &&
              Object.values(pokemonData)?.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            {/* Add more details here */}
          </div>
        ) : (
          <p>Loading Pokémon data...</p>
        )}
        {error && <p>Error fetching data: {error.message}</p>}
      </div>
    </div>
  );
};

export default Pokemoninfo;
