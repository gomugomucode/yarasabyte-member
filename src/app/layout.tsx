import type { Metadata, Viewport } from 'next';
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
    icon: '/brand/ico-bg.png',
    shortcut: '/brand/ico-bg.png',
    apple: '/brand/ico-bg.png',
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
        url: '/brand/ico-bg.png',
        width: 800,
        height: 800,
        alt: 'YarsaByte Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YarsaByte — Creative Technology Collective',
    description:
      'Crafting resilient distributed systems and digital experiences in Butwal, Nepal.',
    images: ['/brand/ico-bg.png'],
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window!=='undefined'&&window.requestIdleCallback){try{window.requestIdleCallback=window.requestIdleCallback.bind(window);if(window.cancelIdleCallback){window.cancelIdleCallback=window.cancelIdleCallback.bind(window);}}catch(e){}}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
