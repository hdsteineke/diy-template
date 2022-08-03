import { useFamilies } from '../../state/hooks/fuzzyBunny.js';
import Family from './Family.jsx';

export default function FamilyList() {
  const { families } = useFamilies();

  if (!families) return null;

  return (
    <ul>
      {families.map((family) => (
        <Family key={family.id} family={family} />
      ))}
    </ul>
  );
}

