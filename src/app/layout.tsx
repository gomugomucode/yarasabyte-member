import type { Metadata, Viewport } from 'next';
import '@/styles/tokens.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yarshabyte.com'),
  title: {
    default: 'YarshaByte — Creative Technology Collective',
    template: '%s | YarshaByte',
  },
  description:
    'YarshaByte is a creative technology company based in Butwal, Nepal, crafting resilient distributed software systems, refined digital experiences, and enterprise platforms.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/brand/yarshabyte-mark.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yarshabyte.com',
    siteName: 'YarshaByte',
    title: 'YarshaByte — Creative Technology Collective',
    description:
      'Crafting resilient distributed systems, interactive platforms, and enduring digital products in Butwal, Nepal.',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YarshaByte Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YarshaByte — Creative Technology Collective',
    description:
      'Crafting resilient distributed systems and digital experiences in Butwal, Nepal.',
    images: ['/brand/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#1e1a18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
