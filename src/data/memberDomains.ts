export const VALID_MEMBER_SLUGS = [
  'aashish',
  'anupam',
  'anmol',
  'beeplap',
  'dinesh',
] as const;

export type MemberSlug = (typeof VALID_MEMBER_SLUGS)[number];

/**
 * Centralized mapping of custom subdomains/domains to member slugs.
 * Only add verified production domains here.
 * Do NOT invent domains for members whose real domains are not known yet.
 */
export const MEMBER_DOMAINS: Readonly<Record<string, MemberSlug>> = Object.freeze({
  'yarasabyte.anupambaral.com.np': 'anupam',
  'yarasabyte.anmolchettri.com': 'anmol',
  'yarshabyte.beeplap.com.np': 'beeplap',
  'yarshabyte.chapagainaashish.com.np': 'aashish',
  'yarshabyte.dineshgautam.com': 'dinesh',
});

/**
 * The canonical primary domain of the YarsaByte collective website.
 */
export const MAIN_SITE_URL = 'https://yarshabyte.vercel.app';

/**
 * Pre-computed O(1) reverse lookup map for member domains.
 */
const SLUG_TO_DOMAIN: Readonly<Partial<Record<MemberSlug, string>>> = Object.freeze(
  Object.fromEntries(
    Object.entries(MEMBER_DOMAINS).map(([domain, slug]) => [slug, domain])
  )
);

/**
 * Returns the configured custom domain for a member slug, if registered.
 * Executes in O(1) time with zero array allocations.
 */
export function getDomainForMember(slug: string): string | undefined {
  const normalizedSlug = slug.toLowerCase().trim() as MemberSlug;
  return SLUG_TO_DOMAIN[normalizedSlug];
}

/**
 * Checks if a given string is a valid member slug.
 */
export function isValidMemberSlug(slug: string): slug is MemberSlug {
  return VALID_MEMBER_SLUGS.includes(slug as MemberSlug);
}
