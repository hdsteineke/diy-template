import { useInView } from 'react-intersection-observer';
import { useSearch } from '../../state/hooks/url.js';
import { usePokedex } from '../../state/hooks/pokedex.js';
import styles from './PokemonList.css';

// this is the pokedex component that maps through the individual 
//card components, displaying the pokemon in a list

export default function PokemonList() {
  const [searchParams] = useSearch();
  const { pokedex, addPage } = usePokedex(searchParams);

  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) addPage();
    },
  });

  return (
    <ul className={styles.PokemonList}>
      {pokedex.map((pokemon, i) => (
        <Card
          key={pokemon._i}
          pokemon={pokemon}
          //is this where some of the auto-load is happening?
          loadRef={i === pokedex.length - 3 ? ref : null}
        />
      ))}
    </ul>
  );
}

//The card components displays individual pokemon details per card
function Card({ pokemon, loadRef }) {
  //destructuring keys from pokemon object 
  //and assigning them to the variable 'pokemon'
  const { url_image, pokemon: name, ability_1 } = pokemon;

  return (
    <li className={styles.Card} ref={loadRef}>
      <img src={url_image} alt={name} />

      <h2 title={name}>
        {name}
      </h2>

      <div>
        <Ability ability={ability_1} />
      </div>
    </li>
  );
}

//creates an ability component that can be called inside the Card component
// for a cleaner look and readability
function Ability({ ability }) {
  return ability === 'NA' ? null : <span>{ability}</span>;
}
