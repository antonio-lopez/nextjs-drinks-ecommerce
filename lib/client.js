import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  apiVersion: '2022-08-23',
  projectId: 'z5l2g80o',
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
