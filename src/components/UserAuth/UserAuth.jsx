import Auth from './Auth.jsx';
import { useStatus } from '../../state/hooks/userAuth.js';
import Profile from './Profile.jsx';
import { Navigate } from 'react-router-dom';


export default function UserAuth() {
  const { user, profile } = useStatus();

  if (user && profile) return <Navigate to="/" />;

  return (
    <section>
      User Auth section
      {/* checks for authorized user: if no, reroute to Auth. 
      if yes, reroute to profile */}
      {user ? <Profile /> : <Auth />}
    </section>
  );
}
