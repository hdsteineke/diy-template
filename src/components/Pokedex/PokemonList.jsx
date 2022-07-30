//import { useEffect } from 'react';
import styles from './PokemonList.css';

// this is the pokedex component that maps through the individual 
//card components, displaying the pokemon in a list

export default function PokemonList({ pokedex }) {
  return (
    <ul className={styles.PokemonList}>
      {pokedex.map((pokemon, i) => (
        <Card
          key={pokemon + i}
          pokemon={pokemon}
        />
      ))}
    </ul>
  );
}

//The card components displays individual pokemon details per card
function Card({ pokemon }) {
  //destructuring keys from pokemon object 
  //and assigning them to the variable 'pokemon'
  const { url_image, pokemon: name, ability_1 } = pokemon;

  return (
    <li className={styles.Card}>
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
