import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from '@/utils/types';

export const client = createClient({
  projectId:"c885dndb",
  dataset:"production",
  apiVersion:"v2024-07-02",
  useCdn:false,
  perspective: 'published',
})
const builder = imageUrlBuilder(client);
export function urlFor(src:SanityImage){
  return builder.image(src);
}