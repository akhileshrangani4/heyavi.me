import { userData } from 'lib/data';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${userData.site}/sitemap.xml`,
    host: userData.site,
    other: {
      'X-Llms-Txt': `${userData.site}/llms.txt`,
    },
  };
}
