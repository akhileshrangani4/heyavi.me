import { userData } from 'lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'View my professional resume and work experience.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume | Akhilesh Rangani',
    description: 'View my professional resume and work experience.',
    url: `${userData.site}/resume`,
    siteName: userData.name,
    images: [
      {
        url: `${userData.site}/images/office.png?v=2`,
        width: 2816,
        height: 1536,
        alt: 'Resume | Akhilesh Rangani',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Akhilesh Rangani',
    description: 'View my professional resume and work experience.',
    creator: '@akhileshrangani',
    images: [`${userData.site}/images/office.png?v=2`],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
