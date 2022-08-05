import { useContext } from 'react';
import {
  signIn as signInService,
  signUp as signUpService,
  uploadAvatar,
  upsertProfile,
} from '../services/user-service.js';
import {
  UserStateContext,
  UserActionContext
} from '../context/UserContext.jsx';

export function useStatus() {
  const { user, profile } = useContext(UserStateContext);

  return { user, profile };
}

export function useAuth() {
  const { setUser } = useContext(UserActionContext);

  const createAction = (service) => async (credentials) => {
    const { user, error } = await service(credentials);

    if (error) {
      alert('Error!! Try again :P');
    }
    if (user) {
      setUser(user);
    }
  };

  const signIn = createAction(signInService);
  const signUp = createAction(signUpService);

  return {
    signIn,
    signUp,
  };
}

//takes in user's data for setting their profile
export function useProfile() {
  const { user, profile } = useContext(UserStateContext);
  const { setProfile } = useContext(UserActionContext);

  const updateProfile = async ({ avatar, ...profile }) => {
    const { url, error } = await uploadAvatar(user.id, avatar);
    if (error) {
      alert('Error!! Try again :P');
    }
    if (url) {
      alert('Uploaded successfully!');
      const { data, error } = await upsertProfile({
        ...profile,
        avatar: url,
      });

      if (error) {
        alert('Error!! Try again :P');
      }
      if (data) {
        alert('saved profile');

        setProfile(data);
      }
    }
  };

  return [profile, updateProfile];
}
