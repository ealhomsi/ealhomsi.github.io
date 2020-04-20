import { BLOCKS } from '@contentful/rich-text-types';

// Urls
export const PRIVACY_POLICY_URL = "https://www.iubenda.com/privacy-policy/12910968";
export const COOKIE_POLICY_URL = "https://www.websitepolicies.com/policies/view/dMUREkTi";

// Formatting for rich documents
export const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <img
          className="inpostImage"
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
      ),
    },
};

// Email Shuffler
export const emailShufflerMessages = [
  'hi',
  'hello',
  'hola',
  'root',
  'you-can-email-me-at-literally-anything',
  'literally',
  'just-say-hi',
  'or-this',
  'marhaba',
  'please-work-for-us',
  'help',
];


// Contentful
export const CONTENTFUL_HOST = 'cdn.contentful.com';
export const ABOUT_ME_ID = '6jlj54NtDEVfRAWZJOgfIN';