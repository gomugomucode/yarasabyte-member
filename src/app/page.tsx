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

  const title = `${profile.name} — ${profile.role}`;
  const description = `${profile.name} is ${profile.role} at YarsaByte. ${profile.positioningStatement}`;

  return {
    title: `${title} | YarsaByte`,
    description,
    openGraph: {
      title: `${title} | YarsaByte`,
      description,
      type: 'profile',
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
      title: `${title} | YarsaByte`,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    worksFor: {
      '@type': 'Organization',
      name: 'YarsaByte',
      url: 'https://yarshabyte.vercel.app',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Butwal',
      addressCountry: 'NP',
    },
    image: profile.avatar,
    email: profile.contact.email,
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
