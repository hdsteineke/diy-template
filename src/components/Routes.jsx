import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import UserAuth from './UserAuth/UserAuth.jsx';
import Layout from './Page/Layout.jsx';
import Home from './Home/Home.jsx';
import Pokedex from './Pokedex/Pokedex.jsx';
import About from './About/About.jsx';
import List from './List/List.jsx';
import FuzzyBunny from './FuzzyBunny/FuzzyBunny';
import Families from './FuzzyBunny/Families';

export default function Routes() {
  return (
    <RRoutes>
      {/* All Routes nested within UserAuth Route will require authorization */}
      <Route path="auth/*" element={<UserAuth />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="about" element={<About />} />
        <Route path="list" element={<List />} />
        <Route path="fuzzy-bunny" element={<FuzzyBunny />}>
          <Route index element={<Families />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </RRoutes>
  );
}
