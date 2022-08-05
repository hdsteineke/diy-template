import { useState } from 'react';
import { useProfile } from '../../state/hooks/userAuth.js';
import { useForm } from '../../state/hooks/formData.js';
import { FormButton, InputControl } from '../Forms/FormControls.jsx';

export default function Profile() {
  const [updateProfile] = useProfile();
  const [profile, handleChange] = useForm();
  const [preview, setPreview] = useState();

  const handlePreview = (e) => {
    const target = e.target;
    const [file] = target.files;
    setPreview(URL.createObjectURL(file));
    handleChange({
      target: {
        name: target.name,
        value: file,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(profile);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Profile</h2>

        <InputControl 
          label="User Name"
          name="username"
          required
          placeholder="enter a username"
          value={profile.username}
          onChange={handleChange}
        />
        
        <InputControl 
          label="Avatar"
          name="avatar"
          type="file"
          required
          onChange={handlePreview}
        >
          {preview && <img src={preview} alt="avatar preview" />}
        </InputControl>

        <FormButton>Update</FormButton>

      </form>
    </section>
  );
}

