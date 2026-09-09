import { Metadata } from 'next';
import {
  getMemberBySlug,
  DEFAULT_MEMBER_SLUG,
  getTeamRoster,
  MAIN_SITE_URL,
} from '@/data';
import { MemberPageTemplate } from '@/components/templates/MemberPageTemplate';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'YarsaByte — Creative Technology Collective';
  const description =
    'YarsaByte is a creative technology collective based in Butwal, Nepal, crafting resilient distributed software systems, refined digital experiences, and enterprise platforms.';

  return {
    title,
    description,
    alternates: {
      canonical: MAIN_SITE_URL,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: MAIN_SITE_URL,
      siteName: 'YarsaByte',
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
      title,
      description,
      images: ['/brand/og-image.png'],
    },
  };
}

export default function HomePage() {
  const profile = getMemberBySlug(DEFAULT_MEMBER_SLUG);
  if (!profile) {
    notFound();
  }

  const team = getTeamRoster();

  // Structured Data Schema.org: Organization for YarsaByte Corporate Homepage
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'YarsaByte',
    url: MAIN_SITE_URL,
    logo: `${MAIN_SITE_URL}/brand/apple-touch-icon.png`,
    description:
      'YarsaByte is a creative technology collective based in Butwal, Nepal, crafting resilient distributed software systems, refined digital experiences, and enterprise platforms.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Butwal',
      addressCountry: 'NP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General Inquiries',
      email: 'contact@yarsabyte.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <MemberPageTemplate profile={profile} team={team} />
    </>
  );
}
