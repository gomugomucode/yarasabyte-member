import { MetadataRoute } from 'next';
import { MAIN_SITE_URL } from '@/data/memberDomains';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${MAIN_SITE_URL}/sitemap.xml`,
  };
}
