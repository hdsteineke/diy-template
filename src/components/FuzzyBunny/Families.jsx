import { useFamilies } from '../../state/hooks/fuzzyBunny';
import Family from './Family';

export default function Families() {
  const { families } = useFamilies();
  return (
    <div>
      {families.map((family) => {
        <Family key={family.id} family={family} />;
      })}
    </div>
  );
}
