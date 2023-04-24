import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonOverview.css";

const PokemonOverview = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <>
      <h1 className="title">Pokemon</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard key={pokemon.name} url={pokemon.url} />
          );
        })}
      </div>
    </>
  );
};

export default PokemonOverview;
