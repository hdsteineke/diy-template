// import { useFamilies } from '../../state/hooks/fuzzyBunny';
// import Family from './Family';

export default function Families() {
  // const { families } = useFamilies();
  return (
    <div>
      {/* {families.map((family) => {
        <Family key={family.id} family={family} />;
      })} */}

      <ul>
        <li>
          <h3>the Steineke family</h3>
          <ul>
            <li>Fuzzylumpkins</li>
            <li>Mojo Jojo</li>
          </ul>

        </li>
      </ul>
    </div>
  );
}
