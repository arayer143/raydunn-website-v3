import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RayDunn Web Solutions',
    short_name: 'RayDunn',
    icons: [
      {
        src: '/PNG Transparent Logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/PNG Transparent Logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  }
}

