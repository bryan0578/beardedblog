import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const imageBuilder = imageUrlBuilder(client)

export const urlFor = (source: any) => {
  return imageBuilder.image(source)
}
