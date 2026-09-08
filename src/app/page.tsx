import { Metadata } from 'next';
import {
  getMemberBySlug,
  DEFAULT_MEMBER_SLUG,
  getTeamRoster,
  getMemberCanonicalUrl,
  MAIN_SITE_URL,
} from '@/data';
import { MemberPageTemplate } from '@/components/templates/MemberPageTemplate';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const profile = getMemberBySlug(DEFAULT_MEMBER_SLUG);
  if (!profile) {
    return {
      title: 'YarsaByte Team',
    };
  }

  const roleDisplay = profile.shortRole
    ? `${profile.shortRole} at ${profile.company || 'YarsaByte'}`
    : profile.role;

  const title = profile.metaTitle || `${profile.name} — ${roleDisplay}`;
  const description =
    profile.metaDescription ||
    profile.tagline ||
    `${profile.name} is ${profile.role} at YarsaByte. ${profile.positioningStatement}`;

  const canonicalUrl = getMemberCanonicalUrl(profile.slug);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: canonicalUrl,
      siteName: profile.company || 'YarsaByte',
      images: [
        {
          url: profile.avatar,
          width: 1200,
          height: 1500,
          alt: `${profile.name} — ${profile.role}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [profile.avatar],
    },
  };
}

export default function HomePage() {
  const profile = getMemberBySlug(DEFAULT_MEMBER_SLUG);
  if (!profile) {
    notFound();
  }

  const team = getTeamRoster();

  const jobTitle = profile.role.includes('—')
    ? profile.role.split('—')[1].trim()
    : profile.role;

  const memberUrl = getMemberCanonicalUrl(profile.slug);

  // Structured Data Schema.org: Person & YarsaByte Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: profile.company || 'YarsaByte',
      url: MAIN_SITE_URL,
      logo: `${MAIN_SITE_URL}/brand/ico-bg.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Butwal',
        addressCountry: 'NP',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Butwal',
      addressCountry: 'NP',
    },
    image: profile.avatar,
    email: profile.contact.email,
    url: memberUrl,
    sameAs: profile.socials.map((s) => s.url).filter((u) => !u.startsWith('mailto:')),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MemberPageTemplate profile={profile} team={team} />
    </>
  );
}
