/**
 * Redirect configuration
 * Add new redirects here and they'll automatically work at /[key]
 */

export type RedirectConfig = {
  url: string;
  metadata?: {
    title: string;
    description: string;
    image?: string;
  };
};

export const redirects: Record<string, string | undefined> = {
  resume: process.env.RESUME_URL || '/resume.pdf',
  calendar: process.env.CAL_URL || process.env.NEXT_PUBLIC_CAL_URL,
  // Add more redirects here:
  // linkedin: 'https://linkedin.com/in/yourprofile',
  // github: 'https://github.com/yourusername',
  // twitter: 'https://twitter.com/yourhandle',
};

/**
 * Metadata for redirect pages
 * This is used for Open Graph tags when sharing links
 * Images can be relative paths (e.g., '/og-image.jpg') - they'll be converted to absolute URLs automatically
 */
export const redirectMetadata: Record<
  string,
  { title: string; description: string; image?: string }
> = {
  resume: {
    title: 'Resume | Akhilesh Rangani',
    description: 'View my professional resume and work experience.',
    image: '/images/office.png',
  },
  calendar: {
    title: 'Schedule a Meeting | Akhilesh Rangani',
    description:
      'Book time with me to discuss opportunities, projects, or just to chat.',
    image: '/images/office.png',
  },
  // Add metadata for more redirects here:
  // linkedin: {
  //   title: 'LinkedIn Profile | Your Name',
  //   description: 'Connect with me on LinkedIn',
  //   image: '/og-linkedin.jpg',
  // },
};
