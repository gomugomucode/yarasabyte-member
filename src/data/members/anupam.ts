import { MemberProfile } from '@/types/member';

export const anupamProfile: MemberProfile = {
  slug: 'anupam',
  name: 'Anupam Baral',
  role: 'CPO — Chief Product Officer',
  shortRole: 'CPO',
  headlineRole: 'CHIEF PRODUCT OFFICER',
  company: 'YarsaByte',
  additionalRoles: 'App Developer · Video Editor',
  subRole: 'App Developer · Video Editor @ YarsaByte',
  location: 'Butwal, Nepal',
  joinedYear: '2023',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
  tagline: 'Shaping products, building applications and creating digital experiences at YarsaByte.',
  positioningStatement:
    'I work across product direction, technology and creative production at YarsaByte. As CPO, I focus on shaping products, defining product direction, understanding user needs and helping turn ideas into useful digital experiences. Alongside product leadership, I contribute to application development and video production.',
  bioHeading: 'Product, technology and creative work — from idea to execution.',
  bioParagraphs: [
    'I am Anupam Baral, CPO at YarsaByte. I work on product thinking, planning and direction while also contributing directly to application development and video production.',
    'I enjoy working across the boundary between product, technology and creativity—bridging user needs with robust application engineering and compelling visual narratives.',
    'At YarsaByte, our focus is making things that matter: building thoughtfully engineered digital experiences and partnering with regional and global clients to bring bold concepts into reality.'
  ],
  metadata: [
    { label: 'BASED IN', value: 'Butwal, Nepal' },
    { label: 'ROLE', value: 'CPO @ YarsaByte' },
    { label: 'ALSO', value: 'App Developer · Video Editor' },
    { label: 'FOCUS', value: 'Product · Technology · Creative' }
  ],
  roleStatement: 'As CPO, I help turn ideas into products that people can actually use.',
  responsibilities: [
    {
      title: 'PRODUCT LEADERSHIP',
      summary: 'Guiding vision, user experience, and roadmap execution for YarsaByte products.',
      items: [
        'Product direction',
        'Product planning',
        'Feature prioritization',
        'User experience thinking',
        'Roadmap planning',
        'Team collaboration'
      ]
    },
    {
      title: 'APP DEVELOPMENT',
      summary: 'Writing code and implementing performant applications across the stack.',
      items: [
        'Application development',
        'Frontend implementation',
        'Backend integration',
        'API development',
        'Product prototyping',
        'Technical problem solving'
      ]
    },
    {
      title: 'VIDEO & CREATIVE',
      summary: 'Crafting compelling visual narratives, product showcases, and media assets.',
      items: [
        'Video editing',
        'Product videos',
        'Promotional content',
        'Visual storytelling',
        'Content production'
      ]
    }
  ],
  projects: [
    {
      id: 'greenstar-automation',
      title: 'GreenStar Automation',
      client: 'GreenStar Suppliers',
      year: '2023',
      role: 'Product · Development · Creative',
      contribution: 'Website development, product presentation and visual content.',
      description:
        'End-to-end web platform and product presentation for industrial automation and suppliers, combining operational workflows with refined digital branding.',
      tags: ['Product Direction', 'App Development', 'Video & Media'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'avenue-butwal',
      title: 'Avenue Butwal',
      client: 'Avenue Butwal',
      year: '2024',
      role: 'Product Strategy · Development',
      contribution: 'Platform architecture, tenant experience planning and frontend development.',
      description:
        'Comprehensive digital portal and directory for Butwal’s flagship commercial and leisure destination, tailored for visitors and commercial tenants.',
      tags: ['Product Strategy', 'Frontend Engineering', 'User Experience'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'yarsabyte-creative-production',
      title: 'YarsaByte Studio Production',
      client: 'YarsaByte Internal',
      year: '2024',
      role: 'Video Editor & Creative Producer',
      contribution: 'Promotional video editing, release trailers, and interactive multimedia content.',
      description:
        'Visual storytelling and multimedia presentations capturing YarsaByte’s design philosophy, client case studies, and digital capabilities.',
      tags: ['Video Editing', 'Motion Content', 'Visual Storytelling'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    }
  ],
  contact: {
    email: 'anupambaral@gmail.com',
    yarsaEmail: 'anupam@yarsabyte.com',
    website: 'https://yarshabyte.vercel.app',
    location: 'Butwal, Nepal',
    timezone: 'Asia/Kathmandu (UTC+05:45)',
    availability: 'Open for product partnerships & creative technology collaborations',
    responseExpectation: 'Usually responds within 24 hours on business days'
  },
  socials: [
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'email', url: 'mailto:anupam@yarsabyte.com', label: 'Email' },
    { platform: 'website', url: 'https://yarshabyte.vercel.app', label: 'Website' }
  ]
};
