import type { Metadata, Viewport } from 'next';
import '@/styles/tokens.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yarshabyte.vercel.app'),
  title: {
    default: 'YarsaByte — Creative Technology Collective',
    template: '%s | YarsaByte',
  },
  description:
    'YarsaByte is a creative technology company based in Butwal, Nepal, crafting resilient distributed software systems, refined digital experiences, and enterprise platforms.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/yarsabyte-mark.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/brand/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yarshabyte.vercel.app',
    siteName: 'YarsaByte',
    title: 'YarsaByte — Creative Technology Collective',
    description:
      'Crafting resilient distributed systems, interactive platforms, and enduring digital products in Butwal, Nepal.',
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YarsaByte Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YarsaByte — Creative Technology Collective',
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
