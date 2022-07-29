const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const ABILITIES_URL = `${API_URL}/abilities`;

export async function getPokedex() {
  const res = await fetch(`${API_URL}`);
  const body = await res.json();

  return body;
}

export async function getAbilities() {
  const res = await fetch(`${ABILITIES_URL}`);
  const body = await res.json();

  return body;
}
