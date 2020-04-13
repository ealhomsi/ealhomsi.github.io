import { createClient } from 'contentful'

const CONTENTFUL_HOST = 'cdn.contentful.com';
const ABOUT_ME_ID = '6jlj54NtDEVfRAWZJOgfIN';

let client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_TOKEN,
  host: CONTENTFUL_HOST
});

export async function getProjects() {
  return client.getEntries({
    'content_type': 'project'
  });
}

export async function getCourses() {
  return client.getEntries({
    'content_type': 'course'
  });
}

export async function getDegrees() {
  return client.getEntries({
    'content_type': 'degree'
  });
}

export async function getPositions() {
  return client.getEntries({
    'content_type': 'position'
  });
}

export async function getSkills() {
  return client.getEntries({
    'content_type': 'skill'
  });
}

export async function getCategories() {
  return client.getEntries({
    'content_type': 'category'
  });
}

export async function getAbout() {
  return client.getEntry(ABOUT_ME_ID);
}
