import { useLocation } from 'react-router-dom';
import './PokemonDetails.css';

const capitalizeName = (name) => name[0].toUpperCase() + name.slice(1, name.length);

const PokemonDetails = () => {
  const { pokemon } = useLocation().state;

  return (
    <>
      {pokemon && (
        <div className="pokemon-details">
          <div className="stats">
            <p id="name"><b>Name: </b>{capitalizeName(pokemon.name)}</p>
            <p id="height"><b>Height: </b>{pokemon.height} m</p>
            <p id="weight"><b>Weight: </b>{pokemon.weight} kg</p>
            <p id="xp"><b>Base Experience: </b>{pokemon.base_experience} xp</p>
          </div>
          
          <div className="sprites">
            <div className="sprite front-default">
              <p>Front Default</p>
              <img id="sprite" src={pokemon.sprites.front_default} alt="Pokemon Front Default" />
            </div>

            <div className="sprite back-default">
              <p>Back Default</p>
              <img id="sprite" src={pokemon.sprites.back_default} alt="Pokemon Back Default" />
            </div>

            <div className="sprite front-shiny">
              <p>Front Shiny</p>
              <img id="sprite" src={pokemon.sprites.front_shiny} alt="Pokemon Front Shiny" />
            </div>

            <div className="sprite back-shiny">
              <p>Back Shiny</p>
              <img id="sprite" src={pokemon.sprites.back_shiny} alt="Pokemon Back Shiny" />
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default PokemonDetails;