export interface Blog {
  id: string;
  title: string;
  date: Date;
  image?: string;
  content: string;
}

interface BlogFrontmatter {
  title: string;
  date: string;
  image?: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw.trim() };

  const [, frontmatterBlock, content] = match;
  const data: Record<string, string> = {};

  frontmatterBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
    data[key] = value;
  });

  return { data, content: content.trim() };
}

const files: Record<string, string> = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const blogs: Blog[] = Object.entries(files).map(([path, raw]: [string, string]) => {
  const { data, content } = parseFrontmatter(raw);
const frontmatter = data as unknown as BlogFrontmatter;  const id = path.split('/').pop()!.replace('.md', '');

  return {
    id,
    title: frontmatter.title ?? 'Untitled',
    date: new Date(frontmatter.date ?? Date.now()),
    image: frontmatter.image,
    content,
  };
});

blogs.sort((a: Blog, b: Blog) => b.date.getTime() - a.date.getTime());

export default blogs;