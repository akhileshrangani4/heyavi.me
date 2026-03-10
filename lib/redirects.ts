export const redirects: Record<string, string | undefined> = {
  calendar: process.env.CAL_URL || process.env.NEXT_PUBLIC_CAL_URL,
};

export const redirectMetadata: Record<
  string,
  { title: string; description: string; image?: string }
> = {
  calendar: {
    title: 'Schedule a Meeting | Akhilesh Rangani',
    description:
      'Book time with me to discuss opportunities, projects, or just to chat.',
    image: '/images/office.png?v=2',
  },
};
