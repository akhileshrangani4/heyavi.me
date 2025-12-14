import { readFile } from 'fs/promises';
import { redirectMetadata } from 'lib/redirects';
import { ImageResponse } from 'next/og';
import { join } from 'path';

export const alt = 'Open Graph Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const metadata = redirectMetadata[page];

  if (!metadata) {
    return new ImageResponse(<div>Not Found</div>, { ...size });
  }

  // If a custom image is specified and it's a local file, use it
  if (metadata.image?.startsWith('/images/')) {
    try {
      const imagePath = join(
        process.cwd(),
        'public',
        metadata.image.substring(1)
      );
      const imageBuffer = await readFile(imagePath);
      
      // Determine content type from file extension
      const contentType = metadata.image.endsWith('.jpg') || metadata.image.endsWith('.jpeg')
        ? 'image/jpeg'
        : 'image/png';
      
      return new Response(new Uint8Array(imageBuffer), {
        headers: {
          'Content-Type': contentType,
        },
      });
    } catch (error) {
      console.error('Error loading image:', error);
    }
  }

  // Fallback: Generate a simple text-based OG image
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          {metadata.title}
        </div>
        <div style={{ fontSize: 32, color: '#666' }}>
          {metadata.description}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
