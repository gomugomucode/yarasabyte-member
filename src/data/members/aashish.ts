import { MemberProfile } from '@/types/member';

export const aashishProfile: MemberProfile = {
  slug: 'aashish',
  name: 'Aashish Thapa',
  role: 'Product Strategist & Full-Stack Engineer',
  subRole: 'Core Team @ YarsaByte',
  location: 'Butwal, Nepal',
  joinedYear: '2023',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
  tagline: 'Bridging commercial strategy, product discovery, and robust full-stack execution.',
  positioningStatement: 'At YarsaByte, I transform ambiguous business challenges into sharp, data-informed digital products that drive quantifiable client growth.',
  bioHeading: 'Architecting digital products with strong market alignment and enduring value.',
  bioParagraphs: [
    'Based in Butwal, Nepal, I focus on turning visionary concepts into tangible digital reality. With a background spanning commercial product strategy, UX architecture, and full-stack software development, I ensure every feature we ship solves genuine user friction.',
    'At YarsaByte, I collaborate with regional enterprises and international founders to uncover product opportunities, map user journeys, and guide agile execution from the initial whiteboard sketch to full production scale.',
    'I believe successful technology is measured not by technical complexity, but by the clarity of its purpose and the real-world value it delivers to both operators and end-users.'
  ],
  philosophyQuote: {
    text: 'A product is only as good as the problem it resolves; technology is the lever, clarity is the fulcrum.',
    author: 'Aashish Thapa'
  },
  metadata: [
    { label: 'AFFILIATION', value: 'YarsaByte Creative Technology' },
    { label: 'LOCATION', value: 'Butwal, Lumbini, Nepal' },
    { label: 'DISCIPLINE', value: 'Product Strategy & Full-Stack' },
    { label: 'TENURE', value: 'Since 2023' },
    { label: 'AVAILABILITY', value: 'Product Roadmap & Discovery Sprints' }
  ],
  responsibilities: [
    {
      title: 'Product Discovery & Roadmapping',
      summary: 'Conducting stakeholder discovery sessions to define requirements, KPIs, and MVP scopes.',
      items: [
        'Translating client commercial goals into concrete technical roadmaps and product milestones.',
        'Authoring user story maps, wireframe prototypes, and feature validation matrices.',
        'Running client feedback loops and post-launch analytics assessments to drive iterations.'
      ]
    },
    {
      title: 'Full-Stack Application Delivery',
      summary: 'Shipping secure, production-tested features across client web applications.',
      items: [
        'Building full-stack modules across Next.js, relational databases, and third-party SaaS integrations.',
        'Implementing payment gateways, authentication flows, and automated notification hooks.',
        'Conducting user acceptance testing (UAT) and security penetration sweeps before rollout.'
      ]
    },
    {
      title: 'Client Strategy & Growth',
      summary: 'Advising business partners on digital transformation and operational efficiency.',
      items: [
        'Assisting regional businesses in modernizing manual operational spreadsheets into web tools.',
        'Synthesizing customer behavior metrics to recommend data-driven product enhancements.',
        'Collaborating with engineering leads on capacity planning, milestones, and timelines.'
      ]
    }
  ],
  competencies: [
    {
      category: 'Product & Strategy',
      skills: ['Product Discovery', 'User Journey Mapping', 'MVP Scoping', 'KPI Tracking', 'Stakeholder Management']
    },
    {
      category: 'Engineering & Stack',
      skills: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma / Drizzle', 'Stripe / Khalti APIs', 'REST APIs']
    },
    {
      category: 'UX & Prototyping',
      skills: ['Information Architecture', 'Figma Prototyping', 'Usability Testing', 'Wireframing']
    },
    {
      category: 'Operations & Process',
      skills: ['Agile / Scrum', 'Technical Writing', 'Client Communication', 'Release Management']
    }
  ],
  milestones: [
    {
      year: '2024',
      title: 'Commercial Rollout for Avenue Butwal',
      description: 'Structured the multi-tier tenant booking flows and administrative portals for commercial managers.'
    },
    {
      year: '2023',
      title: 'GreenStar Suppliers Workflow Discovery',
      description: 'Streamlined the procurement intake process, cutting manual invoice handling time by half.'
    }
  ],
  projects: [
    {
      id: 'avenue-butwal',
      title: 'Avenue Butwal Merchant Ecosystem',
      client: 'Avenue Butwal',
      year: '2024',
      role: 'Product Lead & Solutions Engineer',
      description: 'End-to-end merchant portal allowing retail tenants to publish seasonal collections, manage storefront hours, and coordinate promotions.',
      impact: 'Onboarded 40+ premier regional tenants within 30 days of launch.',
      tags: ['Product Strategy', 'Next.js', 'Merchant Portal', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'greenstar-automation',
      title: 'GreenStar Procurement & Order Engine',
      client: 'GreenStar Industrial',
      year: '2023',
      role: 'Product Strategist',
      description: 'Automated order intake, inventory allocation, and invoice generation system for industrial distribution.',
      impact: 'Eliminated order fulfillment bottlenecks and improved client customer satisfaction ratings by 35%.',
      tags: ['ERP Modernization', 'Workflow Automation', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    }
  ],
  contact: {
    email: 'aashish@yarsabyte.com',
    yarsaEmail: 'aashish@yarsabyte.com',
    location: 'Butwal, Lumbini Province, Nepal',
    timezone: 'Asia/Kathmandu (UTC+05:45)',
    availability: 'Available for product advisory, discovery workshops, and new ventures',
    responseExpectation: 'Replies within 24 hours'
  },
  socials: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'x', url: 'https://x.com', label: 'X (Twitter)' },
    { platform: 'email', url: 'mailto:aashish@yarsabyte.com', label: 'Email' }
  ]
};
