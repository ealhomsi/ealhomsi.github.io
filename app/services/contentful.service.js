import { createClient } from 'contentful'

let client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
  host: 'cdn.contentful.com'
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
