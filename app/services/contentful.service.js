import { createClient } from 'contentful'
import {CONTENTFUL_HOST, ABOUT_ME_ID} from '../data/const'

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

export async function getPosts() {
  return client.getEntries({
    'content_type': 'post'
  });
}

export async function getPost(id) {
  return client.getEntry(
    id, {
      'content_type': 'post'
    }
  );
}

export async function getCategories() {
  return client.getEntries({
    'content_type': 'category'
  });
}

export async function getContactIcons() {
  return client.getEntries({
    'content_type': 'contactIcon'
  });
}

export async function getAbout() {
  return client.getEntry(ABOUT_ME_ID);
}
