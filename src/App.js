import React from "react";

import usePokemon from "./Hooks/usePokemon";

import PokemonView from "./components/PokemonView";

const App = () => {
  const [pokemons, getFetchPokemons] = usePokemon([]);

  return (
    <div className={"app-container"}>
      <h1>Pokemon Index</h1>
      <PokemonView />
    </div>
  );
};

export default App;
