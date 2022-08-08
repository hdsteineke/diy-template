import client from './client.js';

export function getUser() {
  return client.auth.user();
}

export async function signUp(credentials) {
  return await client.auth.signUp(credentials);
}

export async function signIn(credentials) {
  return await client.auth.signIn(credentials);
}

export async function signOut() {
  return await client.auth.signOut();
}

//user profile stuff
const PROFILE = 'profile';

export function getLocalProfile() {
  const json = localStorage.getItem(PROFILE);
  if (!json) return null;
  try {
    return JSON.parse(json);
  } catch (err) {
    localStorage.removeItem(PROFILE);
  }
}

export function saveLocalProfile(profile) {
  localStorage.setItem(PROFILE, JSON.stringify(profile));
}

export async function getProfile() {
  const user = getUser();

  return await client
    .from('profiles')
    .select()
    .eq('id', user.id)
    .single();
}

export async function upsertProfile(profile) {
  const response = await client
    .from('profiles')
    .upsert(profile)
    .eq('id', profile.id)
    .single();

  // saveLocalProfile(response.data);
  return response;
}

const BUCKET_NAME = 'avatars';

export async function uploadAvatar(userId, imageFile) {
  //ensuring image files are uploaded with unique names
  const imageName = `${userId}/${imageFile.name}`;

  const bucket = client.storage.from(BUCKET_NAME);

  const { data, error } = await bucket.upload(imageName, imageFile, {
    cacheControl: '3600',

    upsert: true,
  });

  let url = null;

  if (!error) {
    url = bucket.getPublicUrl(
      data.Key.replace(`${BUCKET_NAME}/`, '')
    ).publicURL;
  }

  return { url, error };
}
