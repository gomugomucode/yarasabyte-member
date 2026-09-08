import { MemberProfile, TeamTeammate } from '@/types/member';
import { anupamProfile } from './members/anupam';
import { anmolProfile } from './members/anmol';
import { aashishProfile } from './members/aashish';
import { beeplapProfile } from './members/beeplap';

const membersMap: Record<string, MemberProfile> = {
  anupam: anupamProfile,
  anmol: anmolProfile,
  aashish: aashishProfile,
  beeplap: beeplapProfile,
};

export const DEFAULT_MEMBER_SLUG = 'anupam';

export function getMemberBySlug(slug: string): MemberProfile | undefined {
  const normalized = slug.toLowerCase().trim();
  return membersMap[normalized];
}

export function getAllMembers(): MemberProfile[] {
  return Object.values(membersMap);
}

export function getAllSlugs(): string[] {
  return Object.keys(membersMap);
}

export function getTeamRoster(): TeamTeammate[] {
  return Object.values(membersMap).map((m) => ({
    slug: m.slug,
    name: m.name,
    role: m.role,
    avatar: m.avatar,
    focus: m.subRole,
    location: m.location,
  }));
}
