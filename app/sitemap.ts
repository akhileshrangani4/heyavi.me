import { getBlogPosts } from 'app/db/blog';
import { userData } from 'lib/data';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split('T')[0];

  const blogs = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map(post => ({
      url: `${userData.site}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: userData.site,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${userData.site}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${userData.site}/guestbook`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${userData.site}/llms.txt`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: `${userData.site}/llms-full.txt`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.3,
    },
  ];

  return [...routes, ...blogs];
}
