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
  summary?: string;
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
  contribution?: string;
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
  shortRole?: string;
  additionalRoles?: string;
  avatar: string;
  focus: string;
  location: string;
}

export interface MemberContact {
  email: string;
  yarsaEmail?: string;
  website?: string;
  location: string;
  timezone?: string;
  availability?: string;
  responseExpectation?: string;
}

export interface MemberProfile {
  slug: string;
  name: string;
  role: string; // e.g. "CPO — Chief Product Officer"
  shortRole?: string; // e.g. "CPO"
  headlineRole?: string; // e.g. "CHIEF PRODUCT OFFICER"
  company?: string; // "YarsaByte"
  additionalRoles?: string; // "App Developer · Video Editor"
  subRole: string; // "App Developer · Video Editor @ YarsaByte"
  location: string; // "Butwal, Nepal"
  joinedYear?: string;
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
  roleStatement?: string;
  roleDescription?: string;
  responsibilities: ResponsibilityCategory[];
  competencies?: SkillCategory[];
  milestones?: MilestoneItem[];
  projects: ProjectContribution[];
  contact: MemberContact;
  socials: SocialLink[];
  metaTitle?: string;
  metaDescription?: string;
}
