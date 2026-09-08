import { MemberProfile } from '@/types/member';

export const beeplapProfile: MemberProfile = {
  slug: 'beeplap',
  name: 'Beeplap Sharma',
  role: 'Systems & Infrastructure Engineer',
  subRole: 'Core Team @ YarsaByte',
  location: 'Butwal, Nepal',
  joinedYear: '2023',
  avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
  tagline: 'Safeguarding uptime, optimizing network topology, and building robust cloud foundations.',
  positioningStatement: 'At YarsaByte, I ensure our software infrastructure is resilient, automated, and fortified with enterprise-grade reliability and speed.',
  bioHeading: 'Automating systems and cloud networks with absolute resilience.',
  bioParagraphs: [
    'Based in Butwal, Nepal, I specialize in cloud infrastructure, container orchestration, edge computing, and system observability. I believe software is only as good as the reliability of the platform it runs on.',
    'At YarsaByte, I manage production environments, containerized deployments, DNS configurations, and security policies for our client web products and internal engineering systems.',
    'My focus is continuous automation: eliminating manual deployment friction, optimizing serverless caching hierarchies, and hardening systems against downtime and unauthorized access.'
  ],
  philosophyQuote: {
    text: 'Resilience is not achieved by avoiding failure; it is engineered by anticipating it and recovering in milliseconds.',
    author: 'Beeplap Sharma'
  },
  metadata: [
    { label: 'AFFILIATION', value: 'YarsaByte Creative Technology' },
    { label: 'LOCATION', value: 'Butwal, Lumbini, Nepal' },
    { label: 'DISCIPLINE', value: 'Cloud Infrastructure & DevOps' },
    { label: 'TENURE', value: 'Since 2023' },
    { label: 'AVAILABILITY', value: 'Cloud Architecture & Security Audits' }
  ],
  responsibilities: [
    {
      title: 'Cloud Platforms & CI/CD Pipelines',
      summary: 'Architecting zero-downtime deployment pipelines and multi-region edge caching layers.',
      items: [
        'Configuring automated GitHub Actions workflows with rigorous linting, build, and security testing.',
        'Managing cloud resources across Vercel Edge, AWS, and Cloudflare CDN infrastructure.',
        'Setting up preview staging environments for real-time client verification.'
      ]
    },
    {
      title: 'Database Reliability & Disaster Recovery',
      summary: 'Ensuring database integrity, transaction consistency, and automated point-in-time backups.',
      items: [
        'Maintaining PostgreSQL replication, automated failovers, and encrypted backup snapshots.',
        'Benchmarking query execution times and implementing Redis caching strategies.',
        'Conducting routine disaster recovery simulations and database restoration drills.'
      ]
    },
    {
      title: 'Observability & Security Hardening',
      summary: 'Implementing end-to-end telemetry, uptime monitoring, and proactive alert systems.',
      items: [
        'Monitoring core vitals, server response times, and anomaly detection via telemetry dashboards.',
        'Implementing strict CORS policies, SSL/TLS certifications, and DDoS mitigation rules.',
        'Auditing third-party dependency vulnerabilities and applying security patches.'
      ]
    }
  ],
  competencies: [
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS (ECS, S3, RDS)', 'Cloudflare (Workers, DNS, CDN)', 'Vercel Edge', 'Docker', 'Linux Administration']
    },
    {
      category: 'DevOps & Tooling',
      skills: ['GitHub Actions CI/CD', 'Terraform Basics', 'Bash Scripting', 'Nginx Configuration', 'Git Workflow']
    },
    {
      category: 'Databases & Storage',
      skills: ['PostgreSQL Administration', 'Redis Caching', 'S3 Object Storage', 'Data Migration Pipelines']
    },
    {
      category: 'Security & Monitoring',
      skills: ['SSL/TLS Hardening', 'Uptime Kuma / Prometheus', 'Log Management', 'OWASP Standards']
    }
  ],
  milestones: [
    {
      year: '2024',
      title: '99.98% Uptime Milestone for Client Fleet',
      description: 'Maintained rock-solid reliability across all YarsaByte production client deployments throughout the year.'
    },
    {
      year: '2023',
      title: 'Edge Infrastructure Overhaul',
      description: 'Migrated global asset distribution to edge CDN networks, cutting international latency by over 50%.'
    }
  ],
  projects: [
    {
      id: 'avenue-butwal',
      title: 'Avenue Butwal High-Availability Cloud',
      client: 'Avenue Butwal',
      year: '2024',
      role: 'Infrastructure & DevOps Engineer',
      description: 'Edge CDN routing, automated image transformations, and SSL hardening for Avenue Butwal’s digital property.',
      impact: 'Maintained zero downtime during heavy festival traffic spikes exceeding 15,000 concurrent page requests.',
      tags: ['Cloudflare Edge', 'Docker', 'PostgreSQL', 'CDN Optimization'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    },
    {
      id: 'greenstar-automation',
      title: 'GreenStar Server & Security Hardening',
      client: 'GreenStar Industrial',
      year: '2023',
      role: 'DevOps & Systems Lead',
      description: 'Encrypted database setup, VPN tunneling, and automated nightly snapshots for proprietary industrial supplier data.',
      impact: 'Secured critical supplier operations with automated disaster recovery under 15 minutes.',
      tags: ['Security Auditing', 'PostgreSQL', 'Automated Backups', 'Linux'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      link: 'https://yarshabyte.vercel.app/',
      featured: true
    }
  ],
  contact: {
    email: 'beeplap@yarsabyte.com',
    yarsaEmail: 'beeplap@yarsabyte.com',
    location: 'Butwal, Lumbini Province, Nepal',
    timezone: 'Asia/Kathmandu (UTC+05:45)',
    availability: 'Available for cloud migration consulting and infrastructure reviews',
    responseExpectation: 'Replies within 24 hours'
  },
  socials: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'x', url: 'https://x.com', label: 'X (Twitter)' },
    { platform: 'email', url: 'mailto:beeplap@yarsabyte.com', label: 'Email' }
  ]
};
