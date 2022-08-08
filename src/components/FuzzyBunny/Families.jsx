import FamilyList from './FamilyList';
import AddFamily from './AddFamily';

export default function Families() {
  // const { families } = useFamilies();
  return (
    <div>
      <AddFamily />
      <FamilyList />
    </div>
  );
}
