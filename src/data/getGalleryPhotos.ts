import {client, urlFor} from './sanityClient'

export interface Photo {
  id: string
  src: string
  srcSet: string
}

const widths = [400, 800, 1200, 1600]

export async function getPhotos(): Promise<Photo[]> {
  const photos = await client.fetch<{_id: string; image: unknown}[]>(
    `*[_type == "photo" && defined(image.asset)] | order(_createdAt desc){_id, image}`
  )

  return photos.map((photo) => ({
    id: photo._id,
    src: urlFor(photo.image).width(800).auto('format').quality(75).url(),
    srcSet: widths
      .map((width) => `${urlFor(photo.image).width(width).auto('format').quality(75).url()} ${width}w`)
      .join(', '),
  }))
}