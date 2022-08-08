import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
import UserProvider from '../state/context/UserContext.jsx';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';

export default function App() {
  return (
    <UserProvider>
      <FuzzyBunnyProvider>
        <Router>
          <Routes />
        </Router>
      </FuzzyBunnyProvider>
    </UserProvider>
  );
}
