import { MemberProfile } from '@/types/member';

export const anmolProfile: MemberProfile = {
  slug: 'anmol',
  name: 'Anmol Shrestha',
  role: 'Creative Technologist & Interface Engineer',
  subRole: 'Core Team @ YarsaByte',
  location: 'Butwal, Nepal',
  joinedYear: '2023',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
  tagline: 'Translating bold creative directions into fluid, kinetic, and accessible digital surfaces.',
  positioningStatement: 'At YarsaByte, I unite interactive design, typography, and frontend engineering to create websites that provoke curiosity and reward interaction.',
  bioHeading: 'Blending creative art direction with clean, high-performance web code.',
  bioParagraphs: [
    'Based in Butwal, Nepal, I focus on the experiential side of technology—interactive motion, visual hierarchies, and responsive layouts that feel as physical and tactile as print.',
    'At YarsaByte, I lead creative frontend development, partnering closely with designers and systems engineers to ensure that complex digital products never sacrifice character, elegance, or speed.',
    'I believe that the best interfaces do not scream for attention; they guide users with graceful micro-interactions, flawless typographic rhythm, and uncompromising respect for accessibility.'
  ],
  philosophyQuote: {
    text: 'Design without interaction is merely decoration; code without craft is merely utility.',
    author: 'Anmol Shrestha'
  },
  metadata: [
    { label: 'AFFILIATION', value: 'YarsaByte Creative Technology' },
    { label: 'LOCATION', value: 'Butwal, Lumbini, Nepal' },
    { label: 'DISCIPLINE', value: 'Creative Tech & Interface Design' },
    { label: 'TENURE', value: 'Since 2023' },
    { label: 'AVAILABILITY', value: 'Creative Direction & Interactive Builds' }
  ],
  responsibilities: [
    {
      title: 'Interactive Frontend Development',
      summary: 'Crafting responsive, animation-rich web applications with silky 60fps interaction models.',
      items: [
        'Developing bespoke interaction patterns, page transitions, and kinetic typography.',
        'Ensuring fluid responsiveness across all viewport breakpoints from mobile to 4K displays.',
        'Optimizing rendering cycles, layout recalculations, and GPU memory usage.'
      ]
    },
    {
      title: 'Design System Implementation',
      summary: 'Translating Figma design language into modular, composable, and accessible CSS tokens.',
      items: [
        'Maintaining component libraries with strict visual fidelity to brand guidelines.',
        'Authoring CSS custom properties, fluid typography scales, and modular spacing systems.',
        'Documenting component usage, motion presets, and interactive states for developers.'
      ]
    },
    {
      title: 'Visual Identity & Art Direction',
      summary: 'Infusing every client delivery with YarsaByte’s signature editorial and minimal aesthetic.',
      items: [
        'Collaborating with clients to define visual moodboards, typographic pairings, and color stories.',
        'Prototyping tactile micro-interactions and interactive widgets before production.',
        'Conducting UI quality audits and visual bug sweeps prior to client sign-off.'
      ]
    }
  ],
  competencies: [
    {
      category: 'Interface Engineering',
      skills: ['HTML5 / Modern CSS', 'CSS Modules & Variables', 'React 19', 'Next.js', 'WebGL / Canvas Basics', 'SVG Animation']
    },
    {
      category: 'Design & Craft',
      skills: ['Figma to Code', 'Typography Hierarchy', 'Editorial Grid Systems', 'Micro-interactions', 'Design Systems']
    },
    {
      category: 'Motion & UX',
      skills: ['CSS Keyframes & Transitions', 'Framer Motion Patterns', 'Scroll-driven Interactions', 'Reduced Motion Standards']
    },
    {
      category: 'Performance & QA',
      skills: ['Lighthouse Auditing', 'Cross-browser Compatibility', 'Responsive Typography', 'Asset Optimization']
    }
  ],
  milestones: [
    {
      year: '2024',
      title: 'Refined YarsaByte Web Experience',
      description: 'Crafted the editorial layout and smooth transitions that define YarsaByte’s public visual identity.'
    },
    {
      year: '2023',
      title: 'Avenue Butwal Brand & Portal Craft',
      description: 'Engineered the dynamic retail showcase and immersive photography layouts for Avenue Butwal.'
    }
  ],
  projects: [
    {
      id: 'avenue-butwal',
      title: 'Avenue Butwal Web Experience',
      client: 'Avenue Butwal',
      year: '2024',
      role: 'Lead UI/UX & Creative Frontend',
      description: 'Art direction and frontend implementation for Butwal’s commercial centerpiece, featuring fluid transitions and dynamic tenant layouts.',
      impact: 'Enhanced mobile dwell time by 48% with intuitive store search and responsive brand showcases.',
      tags: ['Creative Frontend', 'CSS Architecture', 'Responsive UI', 'Next.js'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'lumbini-heritage',
      title: 'Lumbini Cultural Archive',
      client: 'Cultural Preservation Initiative',
      year: '2023',
      role: 'Creative Technologist',
      description: 'Interactive editorial documentary celebrating archaeological landmarks and spiritual heritage around Lumbini Province.',
      impact: 'Featured across regional cultural exhibitions and viewed by over 30,000 international visitors.',
      tags: ['Interactive Storytelling', 'Kinetic Typography', 'Editorial Layout'],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    }
  ],
  contact: {
    email: 'anmol@yarsabyte.com',
    yarsaEmail: 'anmol@yarsabyte.com',
    location: 'Butwal, Lumbini Province, Nepal',
    timezone: 'Asia/Kathmandu (UTC+05:45)',
    availability: 'Available for design engineering & creative web collaborations',
    responseExpectation: 'Replies within 24-48 hours'
  },
  socials: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'x', url: 'https://x.com', label: 'X (Twitter)' },
    { platform: 'email', url: 'mailto:anmol@yarsabyte.com', label: 'Email' }
  ]
};
