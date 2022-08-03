import { client } from './client.js';

export async function getFamilies() {
  const response = await client
    .from('families')
    .select('*');

  return response;
}

export async function addFamily(family) {
  const response = await client
    .from('families')
    .insert(family);
    
  return response;
}

