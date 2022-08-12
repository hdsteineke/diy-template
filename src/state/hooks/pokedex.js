import { useState, useEffect }from 'react';
import { getPokedex, getAbilities } from '../services/pokedex-service.js';

export function useAbilities() {
  const [abilities, setAbilities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetch = async () => {
      const { data, error } = await getAbilities();
      if (ignore) return;
      setAbilities(data);
      setError(error);
    };

    fetch();

    return () => (ignore = true);
  }, []);

  return { abilities, error };
}


export function usePokedex(search, options) {
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState([]);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const perPage = options?.perPage ??  20;

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    let ignore = false;

    const fetch = async () => {
      const { data = {}, error } = await getPokedex(search, {
        page,
        perPage,
      });

      if (ignore) return;

      if (data) {
        const { results, count } = data;
        setCount(count);
        setPage(page);
        setError(null);

        if (page === 1) {
          setPokedex(results);
        } else {
          setPokedex((pokedex) => [...pokedex, ...results]);
        }
      }

      if (error) {
        setError(error);
      }
    };

    fetch();

    return () => (ignore = true);
  }, [search, page]);

  const addPage = () => {
    setPage((page) => {
      return page * perPage > count ? page : page + 1;
    });
  };

  return { pokedex, error, count, addPage };
}
