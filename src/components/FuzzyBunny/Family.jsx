import { useEffect, useRef, useState } from 'react';
import { useActions } from '../../state/hooks/fuzzyBunny.js';
import { InputControl } from '../Forms/FormControls.jsx';

export default function Family({ family }) {
  const { remove, update } = useActions();
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [name, setName] = useState(family.name);

  const handleRemove = async () => await remove(family.id);

  //allows user to begin editing a family name on double-click
  const handleDoubleClick = () => {
    setEditing(true);
  };

  //when editing a family name, cursor focused in this field
  useEffect(() => {
    if (editing) ref.current.focus();
  }, [editing]);

  //allows user to create a family's name
  const handleChange = ({ target }) => {
    setName(target.value);
  };

  //allows user to edit an existing family name
  const handleEdit = async () => {
    setEditing(false);
    if (name === family.name) return;
    await update({ name, id: family.id });
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <li>
      {/* if editing, display input form, else display family name */}
      {editing ? (
        <InputControl
          ref={ref}
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h3 onDoubleClick={handleDoubleClick}>{family.name}</h3>
      )}
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
}
