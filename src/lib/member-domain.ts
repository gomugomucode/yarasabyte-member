import {
  MEMBER_DOMAINS,
  MAIN_SITE_URL,
  getDomainForMember,
  isValidMemberSlug,
  MemberSlug,
} from '@/data/memberDomains';

/**
 * Normalizes a hostname by:
 * - Trimming whitespace
 * - Converting to lowercase
 * - Stripping port numbers (e.g. :3000)
 * - Stripping any trailing FQDN dot
 */
export function normalizeHostname(host: string | null | undefined): string {
  if (!host) return '';
  let cleanHost = host.trim().toLowerCase();

  // Strip port if present (handle IPv4/host:port)
  if (cleanHost.includes(':')) {
    cleanHost = cleanHost.split(':')[0];
  }

  // Strip trailing dot if present
  if (cleanHost.endsWith('.')) {
    cleanHost = cleanHost.slice(0, -1);
  }

  return cleanHost;
}

/**
 * Resolves a hostname to a verified member slug.
 *
 * Supports:
 * 1. Production mapped domains (e.g. yarasabyte.anupambaral.com.np -> anupam)
 * 2. Local development subdomains (e.g. anupam.localhost -> anupam)
 *
 * Returns undefined for:
 * - The primary domain (yarshabyte.vercel.app, localhost, 127.0.0.1)
 * - Unknown subdomains (unknown.localhost)
 * - Unregistered third-party domains
 */
export function getMemberSlugFromHost(host: string | null | undefined): MemberSlug | undefined {
  const cleanHost = normalizeHostname(host);
  if (!cleanHost) return undefined;

  // 1. Check explicit production domain mappings (safe against prototype pollution)
  if (Object.prototype.hasOwnProperty.call(MEMBER_DOMAINS, cleanHost)) {
    const slug = MEMBER_DOMAINS[cleanHost];
    if (slug && isValidMemberSlug(slug)) {
      return slug;
    }
  }

  // 2. Check local development subdomains (<slug>.localhost)
  if (cleanHost.endsWith('.localhost')) {
    const subdomain = cleanHost.slice(0, -'.localhost'.length);
    if (isValidMemberSlug(subdomain)) {
      return subdomain;
    }
  }

  // 3. Fall back safely to undefined for unknown hosts
  return undefined;
}

/**
 * Returns the canonical URL for a member profile for SEO, Open Graph, and Schema.org.
 *
 * Examples:
 * - anupam -> https://yarasabyte.anupambaral.com.np
 * - anmol -> https://yarasabyte.anmolchettri.com
 * - aashish -> https://yarshabyte.vercel.app/team/aashish
 */
export function getMemberCanonicalUrl(slug: string): string {
  const domain = getDomainForMember(slug);
  if (domain) {
    return `https://${domain}`;
  }
  return `${MAIN_SITE_URL}/team/${slug}`;
}

export interface MemberUrlOptions {
  baseUrl?: string;
  isLocal?: boolean;
  port?: string;
}

/**
 * Returns the navigation URL to visit a team member profile.
 *
 * Context-aware:
 * - In local dev (or on localhost), links to http://<slug>.localhost:3000
 * - In production, links to the member's custom domain (e.g. https://yarasabyte.anmolchettri.com)
 * - For members without a custom domain, links to the main team route (https://yarshabyte.vercel.app/team/<slug>)
 */
export function getMemberUrl(slug: string, options?: MemberUrlOptions): string {
  // Check if explicitly marked as local dev
  if (options?.isLocal) {
    const portSuffix = options.port ? `:${options.port}` : '';
    return `http://${slug}.localhost${portSuffix}`;
  }

  // Check client-side window location
  if (typeof window !== 'undefined') {
    const currentHost = normalizeHostname(window.location.host);
    if (currentHost.endsWith('localhost') || currentHost === '127.0.0.1') {
      const portSuffix = window.location.port ? `:${window.location.port}` : '';
      return `http://${slug}.localhost${portSuffix}`;
    }
  }

  // Production domain resolution
  return getMemberCanonicalUrl(slug);
}
