const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
//const ABILITIES_URL = `${API_URL}/abilities`;

export async function getPokedex(searchParams) {
  const res = await fetch(`${API_URL}?${searchParams.toString()}`);
  const body = await res.json();

  return body;
}
