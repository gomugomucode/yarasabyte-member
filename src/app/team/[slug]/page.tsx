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
      title: 'Member Not Found',
    };
  }

  const title = `${profile.name} — ${profile.role}`;
  const description = `${profile.name} is ${profile.role} at YarsaByte. ${profile.positioningStatement}`;

  return {
    title,
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

export default async function MemberPage({ params }: PageProps) {
  const { slug } = await params;
  const profile = getMemberBySlug(slug);

  if (!profile) {
    notFound();
  }

  const team = getTeamRoster();

  // Structured Data Schema.org for SEO
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
