import Auth from './Auth.jsx';
import { useStatus } from '../../state/hooks/userAuth.js';
import Profile from './Profile.jsx';


export default function UserAuth() {
  const { user, profile } = useStatus();

  return (
    <section>
      User Auth section
      {/* checks for authorized user: if no, reroute to Auth. 
      if yes, reroute to profile */}
      {user ? <Profile /> : <Auth />}

      {/* hardcoded preview of user data for checking authentication */}
      <div>
        <h2>User</h2>
        <pre>{JSON.stringify(user, true, 2)}</pre>
        <h2>Profile</h2>
        <pre>{JSON.stringify(profile, true, 2)}</pre>
      </div>
    </section>
  );
}
