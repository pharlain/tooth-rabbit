import {client} from './sanityClient'

export interface Blog {
  id: string
  title: string
  date: Date
  content: string
}

interface SanityPost {
  id: string
  title?: string
  date?: string
  content?: string
}

const PROJECTION = `{
  "id": slug.current,
  title,
  date,
  content
}`

const toBlog = (post: SanityPost): Blog => ({
  id: post.id,
  title: post.title ?? 'Untitled',
  date: new Date(post.date ?? Date.now()),
  content: post.content ?? '',
})

export async function getBlogs(): Promise<Blog[]> {
  const posts = await client.fetch<SanityPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(date desc) ${PROJECTION}`
  )
  return posts.map(toBlog)
}

export async function getBlog(id: string): Promise<Blog | null> {
  const post = await client.fetch<SanityPost | null>(
    `*[_type == "post" && slug.current == $id][0] ${PROJECTION}`,
    {id}
  )
  return post ? toBlog(post) : null
}