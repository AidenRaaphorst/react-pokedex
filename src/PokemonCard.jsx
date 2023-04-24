import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './PokemonCard.css';

const capitalizeName = (name) => name[0].toUpperCase() + name.slice(1, name.length);

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  });

  const handleClick = (name) => {
    const button = document.querySelector(`#${name}-btn`);

    if (button.classList.contains("checked")) {
      button.classList.remove("checked");
    } else {
      button.classList.add("checked");
    }
  }

  return (
    <>
      {pokemon && (
        <div className="pokemon-card">
          <button id={pokemon.name + "-btn"} onClick={() => handleClick(pokemon.name)}>Favourite</button>
          <p><b>{capitalizeName(pokemon.name)}</b></p>
          <img id="sprite" src={pokemon.sprites.front_default} alt="Pokemon Front Default" />
          <Link to="/pokemon-details" state={{ pokemon }}>Meer info</Link>
        </div>
      )}
    </>
  )
}

export default PokemonCard;