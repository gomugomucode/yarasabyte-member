export interface SocialLink {
  platform: 'github' | 'linkedin' | 'x' | 'email' | 'website' | 'instagram';
  url: string;
  label: string;
}

export interface MetadataItem {
  label: string;
  value: string;
}

export interface ResponsibilityCategory {
  title: string;
  summary: string;
  items: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface ProjectContribution {
  id: string;
  title: string;
  client?: string;
  year: string;
  role: string;
  description: string;
  impact?: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
}

export interface TeamTeammate {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  focus: string;
  location: string;
}

export interface MemberContact {
  email: string;
  yarsaEmail: string;
  location: string;
  timezone: string;
  availability: string;
  responseExpectation: string;
}

export interface MemberProfile {
  slug: string;
  name: string;
  role: string;
  subRole: string;
  location: string;
  joinedYear: string;
  avatar: string;
  tagline: string;
  positioningStatement: string;
  bioHeading: string;
  bioParagraphs: string[];
  philosophyQuote?: {
    text: string;
    author?: string;
  };
  metadata: MetadataItem[];
  responsibilities: ResponsibilityCategory[];
  competencies: SkillCategory[];
  milestones?: MilestoneItem[];
  projects: ProjectContribution[];
  contact: MemberContact;
  socials: SocialLink[];
}
