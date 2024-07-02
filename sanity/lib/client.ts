import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId:"c885dndb",
  dataset:"production",
  apiVersion:"v2024-07-02",
  useCdn:false,
  perspective: 'published',
})
const builder = imageUrlBuilder(client);
export function urlFor(src:any){
  return builder.image(src);
}