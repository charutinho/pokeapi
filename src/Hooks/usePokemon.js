import { useEffect, useState } from "react";

const usePokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [getMorePokemons, setGetMorePokemons] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const getFetchPokemons = async () => {
    const res = await fetch(getMorePokemons).then((res) => res.json());

    setGetMorePokemons(res.next);

    function getAllPokemons(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        ).then((res) => res.json());
        setAllPokemons((currentList) => [...currentList, res]);
      });
    }
    getAllPokemons(res.results);
  };

  useEffect(() => {
    getFetchPokemons();
  }, []);

  return [allPokemons, getFetchPokemons];
};

export default usePokemon;
