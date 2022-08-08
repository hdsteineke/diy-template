import { useState } from 'react';
import { useActions } from '../../state/hooks/fuzzyBunny.js';
import { InputControl, FormButton } from '../Forms/FormControls';


export default function AddFamily() {
  const { add } = useActions();
  const [name, setName] = useState();
  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ name });
    setName('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <InputControl 
        label="add a family"
        name="add-family"
        value={name}
        onChange={handleChange}
      />
      <FormButton>Form Button</FormButton>
    </form>
  );
}
