import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Solar Square',
    short_name: 'Solar',
    description:
      'Generate solar power for housing societies with convenience at affordable rates with Solarsquare. Explore end-to-end service, from installation to maintenance &amp; more!',
    start_url: '/',
    display: 'fullscreen',
    background_color: 'white',
    theme_color: 'white',
    orientation: 'any',
    lang: 'en-GB',
    dir: 'auto',
    icons: [
      {
        src: '/pwa-icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
