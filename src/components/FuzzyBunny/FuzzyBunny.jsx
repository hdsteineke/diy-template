//import Navigation from '../Page/Navigation';
//import { Outlet } from 'react-router-dom';

//creating sub-navigation header to toggle between bunnies and families
//on the Fuzzy Bunny page
const navigation = [
  { to: '', label: 'Families' },
  { to: 'bunnies', label: 'Bunnies' },
];

//I believe this component comprises the Page for fuzzy bunnies and families,
//which only needs to include the navigation in the main header,
//and the sub-navigation between families and bunnies within that
export default function FuzzyBunny() {
  return (
    <section>
      <header>
        <h1>Navigation Component</h1>
        {/* <Navigation navigation={navigation} /> */}
      </header>
      <h1>Outlet</h1>
    </section>
  );
}
