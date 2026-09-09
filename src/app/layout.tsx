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
      { url: '/brand/ico-bg.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
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
            __html: `(function(){if(typeof window==='undefined')return;try{var p=(typeof Window!=='undefined'&&Window.prototype)?Window.prototype:null;var r=window.requestIdleCallback||(p&&p.requestIdleCallback);if(r){var safeR=function(cb,opts){return r.call(window,cb,opts);};window.requestIdleCallback=safeR;if(p)p.requestIdleCallback=safeR;}var c=window.cancelIdleCallback||(p&&p.cancelIdleCallback);if(c){var safeC=function(id){return c.call(window,id);};window.cancelIdleCallback=safeC;if(p)p.cancelIdleCallback=safeC;}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
