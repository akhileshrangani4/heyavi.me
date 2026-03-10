import { getBlogPosts } from 'app/db/blog';
import { userData } from 'lib/data';

export const revalidate = 3600;

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const sections: string[] = [];
  sections.push(`# ${userData.name} - Full Blog Content`);
  sections.push(
    `> All blog posts from ${userData.site} in plain text format.`
  );

  for (const post of posts) {
    sections.push(
      `## ${post.metadata.title}\n\nURL: ${userData.site}/blog/${post.slug}\nPublished: ${post.metadata.publishedAt}\n${post.metadata.keywords ? `Keywords: ${post.metadata.keywords}\n` : ''}\n${post.content}`
    );
  }

  return new Response(sections.join('\n\n---\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
