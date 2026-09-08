import { MemberProfile, TeamTeammate } from '@/types/member';
import { aashishProfile } from './members/aashish';
import { anupamProfile } from './members/anupam';
import { anmolProfile } from './members/anmol';
import { beeplapProfile } from './members/beeplap';
import { dineshProfile } from './members/dinesh';

const membersMap: Record<string, MemberProfile> = {
  aashish: aashishProfile,
  anupam: anupamProfile,
  anmol: anmolProfile,
  beeplap: beeplapProfile,
  dinesh: dineshProfile,
};

export const DEFAULT_MEMBER_SLUG = 'anupam';

export const OFFICIAL_LEADERSHIP_ORDER = [
  'aashish',
  'anupam',
  'anmol',
  'beeplap',
  'dinesh',
] as const;

export function getMemberBySlug(slug: string): MemberProfile | undefined {
  const normalized = slug.toLowerCase().trim();
  return membersMap[normalized];
}

export function getAllMembers(): MemberProfile[] {
  return OFFICIAL_LEADERSHIP_ORDER.map((slug) => membersMap[slug]);
}

export function getAllSlugs(): string[] {
  return [...OFFICIAL_LEADERSHIP_ORDER];
}

export function getTeamRoster(): TeamTeammate[] {
  return OFFICIAL_LEADERSHIP_ORDER.map((slug) => {
    const m = membersMap[slug];
    let focus = m.subRole;

    if (m.slug === 'aashish') {
      focus = 'Vision · Fundraising · External Strategy';
    } else if (m.slug === 'anupam') {
      focus = 'App Developer · Video Editor';
    } else if (m.slug === 'anmol') {
      focus = 'Brand · Growth Strategy · GTM';
    } else if (m.slug === 'beeplap') {
      focus = 'Tech Stack · Architecture · Infra';
    } else if (m.slug === 'dinesh') {
      focus = 'Legal · Finance · Operations';
    }

    return {
      slug: m.slug,
      name: m.name,
      role: m.role,
      shortRole: m.shortRole,
      additionalRoles: m.additionalRoles,
      avatar: m.avatar,
      focus,
      location: m.location,
    };
  });
}
