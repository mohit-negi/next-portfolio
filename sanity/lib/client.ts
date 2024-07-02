import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId:"c885dndb",
  dataset:"production",
  apiVersion:"v2024-07-02",
  useCdn:false,
  perspective: 'published',
})
