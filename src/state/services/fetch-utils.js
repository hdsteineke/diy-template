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

export async function deleteFamily(id) {
  const response = await client
    .from('families')
    .delete()
    .match(id)
    .single();

  return response;
}

export async function updateFamily(id, familyUpdate) {
  const response = await client
    .from('families')
    .update(familyUpdate)
    .match(id)
    .single();
}

