import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMemberBySlug, getAllSlugs, getTeamRoster } from '@/data';
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

  let title = `${profile.name} — ${profile.role} | YarsaByte`;
  let description = `${profile.name} is ${profile.role} at YarsaByte. ${profile.positioningStatement}`;

  if (profile.slug === 'anupam') {
    title = 'Anupam Baral — CPO at YarsaByte';
    description =
      'Anupam Baral is the Chief Product Officer at YarsaByte, working across product direction, application development and video production.';
  }

  const canonicalUrl = `https://yarshabyte.vercel.app/team/${profile.slug}`;

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
      siteName: 'YarsaByte',
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

  // Structured Data Schema.org: Person & YarsaByte Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.slug === 'anupam' ? 'Chief Product Officer' : profile.role,
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
    url: `https://yarshabyte.vercel.app/team/${profile.slug}`,
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
