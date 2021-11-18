import React from "react";

import usePokemon from "../Hooks/usePokemon";
import Button from "./Button";

import "./PokemonView.css";

const PokemonView = () => {
  const [pokemons, getFetchPokemons] = usePokemon([]);

  return (
    <>
      <div className={"pokemon-container"}>
        {pokemons.map((pokemon, index) => {
          return (
            <div
              key={index}
              className={`pokemon-thumbnail ${pokemon.types[0].type.name}`}
            >
              <div className={"pokemon-img-container"}>
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  className={"pokemon-img"}
                />
              </div>
              <p>{pokemon.name}</p>
            </div>
          );
        })}
      </div>
      <Button onClickEvent={getFetchPokemons}>Carregar mais</Button>
    </>
  );
};

export default PokemonView;
