import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getMemberBySlug,
  getAllSlugs,
  getTeamRoster,
  getMemberCanonicalUrl,
  MAIN_SITE_URL,
} from '@/data';
import { MemberPageTemplate } from '@/components/templates/MemberPageTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getMemberBySlug(slug);

  if (!profile) {
    return {
      title: 'Member Not Found | YarsaByte',
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

export default async function MemberPage({ params }: PageProps) {
  const { slug } = await params;
  const profile = getMemberBySlug(slug);

  if (!profile) {
    notFound();
  }

  const team = getTeamRoster();

  // Dynamic job title extracted cleanly from role (e.g. "CPO — Chief Product Officer" -> "Chief Product Officer")
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
