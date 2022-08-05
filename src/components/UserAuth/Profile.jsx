import { useState } from 'react';
import { useProfile } from '../../state/hooks/userAuth.js';
import { useForm } from '../../state/hooks/formData.js';
import { FormButton, InputControl } from '../Forms/FormControls.jsx';

export default function Profile() {
  const [updateProfile] = useProfile();
  const [profile, handleChange] = useForm();
  const [preview, setPreview] = useState();
  const [updating, setUpdating] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    await updateProfile(profile);
    setUpdating(false);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>User Profile</h2>

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
          {/* allows user to see a preview of their avatar image */}
          <Avatar src={preview} username={profile.username} />
        </InputControl>

        <FormButton>Update</FormButton>
          {updating ? 'Updating...' : 'Update'}

      </form>
    </section>
  );
}

