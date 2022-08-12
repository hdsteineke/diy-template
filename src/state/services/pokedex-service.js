const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
const ABILITIES_URL = `${API_URL}/abilities`;

export async function getPokedex(search, pagingOptions = {}) {
  const params = new URLSearchParams(search);
  const { page, perPage } = pagingOptions;
  if (page) params.set('page', page);
  if (perPage) params.set('perPage', perPage);

  return await get(
    `${API_URL}?${params.toString()}`
  );
}

export async function getAbilities() {
  return await get(ABILITIES_URL);
  
}

//get function to clean up repetition in getPokedex and getAbilities functions. 
async function get(url) {
  const res = await fetch(url);
  const body = await res.json();

  return {
    data: res.ok ? body : null,
    error: res.ok ? null : body,
  };
}
