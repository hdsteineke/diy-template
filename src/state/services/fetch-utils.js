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
    .eq('id', id)
    .single();

  return response;
}

export async function updateFamily(family) {
  const response = await client
    .from('families')
    .update(family)
    .eq('id', family.id)
    .single();

  return response;
}

