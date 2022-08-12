import { useSearch } from '../../state/hooks/url.js';
import { useAbilities } from '../../state/hooks/pokedex.js';
import {
  Form,
  InputControl,
  SelectControl,
  FormButton,
} from '../Forms/FormControls.jsx';

export default function Search() {
  const { abilities } = useAbilities();
  const [search, setSearch] = useSearch();

  return (
    <Form
      data={search}
      onSubmit={setSearch}
    >
      <InputControl label="pokemon" name="pokemon" />

      <SelectControl label="ability" name="ability">
        <option value={''}>all abilities</option>
        {abilities.map(({ ability, count }) => (
          <AbilityOption key={ability} type={ability} count={count} />
        ))}
      </SelectControl>
      <FormButton>Search</FormButton>
    </Form>
  );
}

function AbilityOption({ ability, count }) {
  return <option value={ability}>{`${ability} (${count})`}</option>;
}
