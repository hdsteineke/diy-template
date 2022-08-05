import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import List from './List/List.jsx';
import About from './About/About.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import Bunnies from './FuzzyBunny/Bunnies.jsx';
import Families from './FuzzyBunny/Families.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny.jsx';
import FuzzyBunnyProvider from '../state/context/FuzzyBunnyContext.jsx';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <FuzzyBunnyProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="list" element={<List />} />
              <Route path="pokedex" element={<Pokedex />} />
              <Route path="about" element={<About />} />
              <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
                <Route index element={<Families />} />
                <Route path="bunnies" element={<Bunnies />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </FuzzyBunnyProvider>
      </UserProvider>
    </Router>
  );
}
