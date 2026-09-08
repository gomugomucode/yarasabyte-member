import { Metadata } from 'next';
import { getMemberBySlug, DEFAULT_MEMBER_SLUG, getTeamRoster } from '@/data';
import { MemberPageTemplate } from '@/components/templates/MemberPageTemplate';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const profile = getMemberBySlug(DEFAULT_MEMBER_SLUG);
  if (!profile) {
    return {
      title: 'YarsaByte Team',
    };
  }

  const title = 'Anupam Baral — CPO at YarsaByte';
  const description =
    'Anupam Baral is the Chief Product Officer at YarsaByte, working across product direction, application development and video production.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://yarshabyte.vercel.app/team/anupam',
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: 'https://yarshabyte.vercel.app/team/anupam',
      siteName: 'YarsaByte',
      images: [
        {
          url: profile.avatar,
          width: 1200,
          height: 1500,
          alt: `${profile.name} — CPO at YarsaByte`,
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

  // Structured Data Schema.org: Person & YarsaByte Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Chief Product Officer',
    worksFor: {
      '@type': 'Organization',
      name: 'YarsaByte',
      url: 'https://yarshabyte.vercel.app',
      logo: 'https://yarshabyte.vercel.app/ico-bg.png',
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
    url: 'https://yarshabyte.vercel.app/team/anupam',
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
