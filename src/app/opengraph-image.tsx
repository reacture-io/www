import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Reacture - Software & AI Engineering';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #000 0%, #111 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}>
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Reacture
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#888',
            textAlign: 'center',
            maxWidth: 800,
          }}>
          Software & AI Engineering for cutting-edge digital solutions
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#666',
            marginTop: 40,
          }}>
          TypeScript • React • AI • Full-stack Development
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
