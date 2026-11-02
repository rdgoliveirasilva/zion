import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zion | Assistente Financeiro',
    short_name: 'Zion',
    description: 'Controle suas finanças de forma simples e inteligente.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0014',
    theme_color: '#6b21a8',
    icons: [
      {
        src: '/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}