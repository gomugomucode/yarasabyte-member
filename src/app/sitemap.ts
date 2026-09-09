import { MetadataRoute } from 'next';
import { getAllSlugs, getMemberCanonicalUrl, MAIN_SITE_URL } from '@/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

  // Deduplicated canonical URLs
  // Only canonical indexable URLs belong in the sitemap:
  // 1. The main website homepage: https://yarshabyte.vercel.app
  // 2. Verified member domains (e.g. https://yarasabyte.anupambaral.com.np)
  // 3. Members without custom domains at their canonical route (e.g. https://yarshabyte.vercel.app/team/aashish)
  const uniqueUrls = new Map<string, MetadataRoute.Sitemap[number]>();

  // Stable baseline date representing the release snapshot of member profiles
  const BASE_MODIFIED_DATE = new Date('2025-02-15T00:00:00.000Z');

  // Main corporate collective website homepage
  uniqueUrls.set(MAIN_SITE_URL, {
    url: MAIN_SITE_URL,
    lastModified: BASE_MODIFIED_DATE,
    changeFrequency: 'monthly',
    priority: 1.0,
  });

  // Each member's canonical destination
  for (const slug of slugs) {
    const canonicalUrl = getMemberCanonicalUrl(slug);
    if (!uniqueUrls.has(canonicalUrl)) {
      uniqueUrls.set(canonicalUrl, {
        url: canonicalUrl,
        lastModified: BASE_MODIFIED_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    }
  }

  return Array.from(uniqueUrls.values());
}
