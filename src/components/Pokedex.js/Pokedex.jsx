import PokemonList from './PokemonList.jsx';

export default function Pokedex() {
  const { pokedex } = usePokedex();

  if (!pokedex) return null;

  return (
    <section className={StyleSheet.Pokedex}>
      <PokemonList pokedex={pokedex} />
    </section>
  );
}
