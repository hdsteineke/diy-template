import { client } from './client.js';

export async function getFamilies() {
  const response = await client
    .from('families')
    .select('*');

  console.log(response);
  return response;
}

