import { useState, useEffect }from 'react';
import { getPokedex, getAbilities } from '../services/pokedex-service.js';

export function useAbilities() {
  const [abilities, setAbilities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await getAbilities();
      setAbilities(data);
      setError(error);
    };
    fetch();
  }, []);

  return { abilities, error };
}


export function usePokedex() {
  const [pokedex, setPokedex] = useState([]);

  // useEffect(() => {
  //   setPokedex([]);
  // }, []);

  useEffect(() => {
    const fetch = async () => {
      const pokeData = await getPokedex();
      console.log('pokeData', pokeData);
      setPokedex(pokeData.results);
    };
    fetch();
  }, []);

  return { pokedex };
}
