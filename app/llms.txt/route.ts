import { getBlogPosts } from 'app/db/blog';
import { userData } from 'lib/data';

export const revalidate = 3600;

export async function GET() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const lines: string[] = [];
  lines.push(`# ${userData.name}`);
  lines.push(
    `> Personal portfolio and blog. Software engineer writing about building things, hackathons, and developer tools.`
  );
  lines.push(
    `Use \`/llms-full.txt\` for a single file containing all blog post content.`
  );

  lines.push(`## Blog Posts`);
  const postLines = posts.map(
    (post) =>
      `- [${post.metadata.title}](${userData.site}/blog/${post.slug}): ${post.metadata.summary}`
  );
  lines.push(postLines.join('\n'));

  return new Response(lines.join('\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
