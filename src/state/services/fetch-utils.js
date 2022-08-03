import client from './client.js';

export async function getFamilies() {
  const { body } = await client
    .from('families')
    .select('*');

  return body;
}
