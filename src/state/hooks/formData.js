import { useState } from 'react';

export function useForm() {
  const [data, setData] = useState({});

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: getValue(target),
    });
  };

  return [data, handleChange];
}

//looks like a way for managing what the form type is and how it is handled
function getValue({ value, type, checked }) {
  if (type === 'checkbox') return checked;
  return value;
}
