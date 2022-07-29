import { useSearchParams } from 'react-router-dom';
import { usePokedex } from '../../state/hooks/pokedex.js';
import PokemonList from './PokemonList.jsx';

export default function Pokedex() {
  const [searchParams] = useSearchParams();
  const { pokedex } = usePokedex(searchParams);

  if (!pokedex) return null;

  return (
    <section>
      <h1>Pokemon</h1>
      <PokemonList pokedex={pokedex} />
    </section>
  );
}
