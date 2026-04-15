import { userData } from 'lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Music',
  description: 'tune kaha tha - a single by Akhilesh Rangani (avi)',
  alternates: {
    canonical: '/music',
  },
  openGraph: {
    title: 'tune kaha tha',
    description: 'a single by avi. listen on spotify, youtube, amazon music, tidal, and more.',
    url: `${userData.site}/music`,
    siteName: userData.name,
    locale: 'en_US',
    type: 'music.song',
    images: [
      {
        url: `${userData.site}/og?title=${encodeURIComponent('tune kaha tha')}&summary=${encodeURIComponent('a single by avi. listen now on spotify, youtube, amazon music, tidal, and more.')}&keywords=${encodeURIComponent('music,single,tune kaha tha,avi,spotify')}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'tune kaha tha',
    description: 'a single by avi. listen on spotify, youtube, amazon music, tidal, and more.',
    card: 'summary_large_image',
    creator: '@akhileshrangani',
  },
};

const streamingLinks = [
  {
    name: 'spotify',
    url: 'https://open.spotify.com/track/5gLRwBPPJHpUFUfvkz2tYC?si=087c42bc912445ab&utm_medium=share&utm_source=linktree',
    logo: '/images/music/logos/spotify.svg',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/watch?v=8ogwU0Jc1hc',
    logo: '/images/music/logos/youtube.svg',
  },
  {
    name: 'youtube music',
    url: 'https://music.youtube.com/watch?v=8ogwU0Jc1hc&si=ZxK_Ea8-c6K8G5yL',
    logo: '/images/music/logos/youtube-music.svg',
  },
  {
    name: 'amazon music',
    url: 'https://music.amazon.in/albums/B0GX98SW63?do=play&trackAsin=B0GX9K1SL2&ts=1776268616&ref=dm_sh_SDhjamKH5MKfjkWvG1p4ycG2u',
    logo: '/images/music/logos/amazon-music.svg',
  },
  {
    name: 'tidal',
    url: 'https://listen.tidal.com/track/516038524',
    logo: '/images/music/logos/tidal.svg',
    invertOnDark: true,
  },
  {
    name: 'pandora',
    url: 'https://www.pandora.com/TR:202159720',
    logo: '/images/music/logos/pandora.svg',
  },
];

export default function MusicPage() {
  return (
    <section>
      <div className="mb-8 animate-enter animate-enter-1">
        <h1 className="text-3xl font-medium mb-3 tracking-tight text-neutral-900 dark:text-neutral-100">
          music
        </h1>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
          i started writing music as a way to process things i couldn't say out loud. sometimes code isn't the right language for what you're feeling.
        </p>
      </div>

      {/* about the song */}
      <div className="mb-12 animate-enter animate-enter-2">
        <h2 className="text-xs font-medium mb-4 text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          tune kaha tha
        </h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
          &ldquo;tune kaha tha&rdquo; means &ldquo;you had said.&rdquo; it's about the guilt of walking away from someone who asked you to stay. about choosing the easier path and living with the weight of that. the words you couldn't say when it mattered, and the ones that keep echoing after.
        </p>
      </div>

      {/* spotify embed */}
      <div className="mb-12 animate-enter animate-enter-3">
        <iframe
          src="https://open.spotify.com/embed/track/5gLRwBPPJHpUFUfvkz2tYC?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </div>

      {/* streaming links */}
      <div className="mb-12 animate-enter animate-enter-4">
        <h2 className="text-xs font-medium mb-4 text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          listen on
        </h2>
        <div className="flex flex-col gap-3">
          {streamingLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors duration-150"
            >
              <Image
                src={link.logo}
                alt={`${link.name} logo`}
                width={20}
                height={20}
                className={link.invertOnDark ? 'dark:invert' : ''}
              />
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {link.name}
              </span>
              <svg
                className="w-4 h-4 ml-auto text-neutral-400 dark:text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* artist info */}
      <div className="mb-12 animate-enter animate-enter-5">
        <h2 className="text-xs font-medium mb-4 text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          artist
        </h2>
        <p className="text-sm text-neutral-900 dark:text-neutral-100">
          {userData.name}
        </p>
        <a
          href={`mailto:${userData.email}`}
          className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline decoration-neutral-200 dark:decoration-neutral-800 underline-offset-[3px] decoration-[0.5px] hover:decoration-neutral-500 dark:hover:decoration-neutral-400"
        >
          {userData.email}
        </a>
      </div>
    </section>
  );
}
