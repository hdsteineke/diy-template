import { createContext, useMemo, useState } from 'react';
import { getUser, getLocalProfile } from '../services/user-service.js';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState(getLocalProfile());

  const stateValue = {
    user,
    profile
  };
  
}