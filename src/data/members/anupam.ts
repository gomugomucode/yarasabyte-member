import { MemberProfile } from '@/types/member';

export const anupamProfile: MemberProfile = {
  slug: 'anupam',
  name: 'Anupam Baral',
  role: 'Lead Software Engineer & Systems Architect',
  subRole: 'Core Team @ YarsaByte',
  location: 'Butwal, Nepal',
  joinedYear: '2023',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
  tagline: 'Crafting resilient distributed backends, refined interfaces, and scalable engineering foundations at YarsaByte.',
  positioningStatement: 'I lead technical architecture and end-to-end engineering at YarsaByte, bridging creative vision with rock-solid distributed systems and tactile digital experiences.',
  bioHeading: 'Engineering software with intentionality, high precision, and long-term durability.',
  bioParagraphs: [
    'Based in Butwal, Nepal, I work at the intersection of systems architecture, frontend craft, and developer experience. At YarsaByte, I spearhead the foundational engineering of client platforms, ensuring every digital product we deliver is lightning-fast, fault-tolerant, and memorable.',
    'Over the past several years, I have architected and deployed high-throughput web applications, headless commerce systems, and automated operations pipelines. My philosophy centers on simplicity over accidental complexity: building systems that are straightforward to reason about, effortless to maintain, and a delight for end-users to interact with.',
    'Beyond day-to-day coding, I cultivate engineering standards across our team—championing rigorous code reviews, automated CI/CD pipelines, accessible web standards, and continuous learning within Nepal’s growing technology ecosystem.'
  ],
  philosophyQuote: {
    text: 'Great software feels inevitable—quietly robust underneath, effortless and expressive on the surface.',
    author: 'Anupam Baral'
  },
  metadata: [
    { label: 'AFFILIATION', value: 'YarsaByte Creative Technology' },
    { label: 'LOCATION', value: 'Butwal, Lumbini, Nepal' },
    { label: 'DISCIPLINE', value: 'Architecture & Full-Stack Systems' },
    { label: 'TENURE', value: 'Since 2023' },
    { label: 'AVAILABILITY', value: 'Consultations & Core Partnerships' }
  ],
  responsibilities: [
    {
      title: 'Systems & Technical Architecture',
      summary: 'Designing resilient cloud infrastructure, API topologies, and data contracts that scale gracefully.',
      items: [
        'Defining architectural patterns across Next.js, Node.js, and cloud native microservices.',
        'Authoring technical blueprints, API schemas, and database entity models for flagship projects.',
        'Auditing application performance, serverless edge compute latency, and database query costs.'
      ]
    },
    {
      title: 'Client Engineering & Delivery',
      summary: 'Leading technical execution on YarsaByte client partnerships from inception to production launch.',
      items: [
        'Delivering mission-critical web platforms for clients including Avenue Butwal and GreenStar.',
        'Ensuring 100% adherence to modern accessibility (WCAG AA), Core Web Vitals, and SEO guidelines.',
        'Coordinating technical releases, staging environments, and zero-downtime deployment pipelines.'
      ]
    },
    {
      title: 'Engineering Culture & Standards',
      summary: 'Establishing high-leverage workflows and mentoring team engineers across the YarsaByte collective.',
      items: [
        'Curating YarsaByte engineering guidelines, TypeScript typings, and CI linting configurations.',
        'Mentoring junior and mid-level engineers in systems debugging and clean component composition.',
        'Leading internal engineering workshops on distributed resilience, caching, and state management.'
      ]
    }
  ],
  competencies: [
    {
      category: 'Architecture & Backend',
      skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'Docker', 'Distributed Systems']
    },
    {
      category: 'Frontend & UI Craft',
      skills: ['Next.js (App Router)', 'React 19', 'Design Systems', 'Vanilla CSS / CSS Modules', 'Micro-interactions', 'Web Performance']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Vercel Edge Platform', 'AWS / Cloudflare', 'CI/CD Automation', 'Docker', 'Monitoring & Observability']
    },
    {
      category: 'Practices & Standards',
      skills: ['Domain-Driven Design', 'Zero-Downtime Deployment', 'API Contract Testing', 'Semantic HTML', 'WCAG 2.1 AA']
    }
  ],
  milestones: [
    {
      year: '2024',
      title: 'Spearheaded Avenue Butwal Digital Experience',
      description: 'Engineered the multi-tenant digital hub for Butwal’s flagship shopping and leisure complex with sub-second page loads.'
    },
    {
      year: '2023',
      title: 'Joined YarsaByte Core Engineering',
      description: 'Established the internal component library and architectural standards powering client projects.'
    },
    {
      year: '2023',
      title: 'GreenStar Automation System Deployment',
      description: 'Architected real-time inventory tracking and automated procurement management for industrial suppliers.'
    }
  ],
  projects: [
    {
      id: 'avenue-butwal',
      title: 'Avenue Butwal Platform',
      client: 'Avenue Butwal',
      year: '2024',
      role: 'Lead Systems Architect & Full-Stack Lead',
      description: 'Comprehensive digital portal, tenant directory, and real-time event booking ecosystem for Butwal’s premier commercial and leisure destination.',
      impact: 'Reduced page load time by 64% and supported 50,000+ monthly visits during launch festivities.',
      tags: ['Next.js', 'TypeScript', 'Tailored CSS', 'PostgreSQL', 'Cloudflare'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'greenstar-automation',
      title: 'GreenStar Suppliers & Automation',
      client: 'GreenStar Industrial',
      year: '2023',
      role: 'Backend Architect & API Designer',
      description: 'Enterprise ERP integration and real-time inventory synchronization engine for industrial components and automation equipment.',
      impact: 'Automated 1,200+ monthly order dispatches with zero order-state inconsistencies.',
      tags: ['Node.js', 'Redis', 'PostgreSQL', 'RESTful API', 'Docker'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'yarsabyte-design-system',
      title: 'YarsaByte Design & Motion System',
      client: 'YarsaByte Internal',
      year: '2024',
      role: 'Component Architect',
      description: 'The internal component framework and token infrastructure ensuring visual cohesion, fluid motion, and strict accessibility across all studio builds.',
      impact: 'Accelerated client project scaffolding time by 3.5x while keeping bundle sizes below 80KB.',
      tags: ['Design System', 'Accessibility', 'CSS Architecture', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    }
  ],
  contact: {
    email: 'anupambaral@gmail.com',
    yarsaEmail: 'anupam@yarsabyte.com',
    location: 'Butwal, Lumbini Province, Nepal',
    timezone: 'Asia/Kathmandu (UTC+05:45)',
    availability: 'Open for high-impact technical advisory & YarsaByte client initiatives',
    responseExpectation: 'Usually responds within 24 hours on business days'
  },
  socials: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'x', url: 'https://x.com', label: 'X (Twitter)' },
    { platform: 'email', url: 'mailto:anupam@yarsabyte.com', label: 'Email' }
  ]
};
