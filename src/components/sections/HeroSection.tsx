'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, Globe, Linkedin, Mail, Twitter } from 'lucide-react';
import { MemberProfile, SocialLink } from '@/types/member';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  profile: MemberProfile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const renderSocialIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'x':
        return <Twitter size={18} />;
      case 'email':
        return <Mail size={18} />;
      case 'website':
        return <Globe size={18} />;
      default:
        return <ArrowUpRight size={18} />;
    }
  };

  return (
    <section id="overview" className={`section-editorial ${styles.heroSection}`}>
      <div className="container-editorial">
        {/* Hero Main Grid */}
        <div className={styles.heroGrid}>
          {/* Left Column: Name, Role Hierarchy & Statement */}
          <div className={styles.contentCol}>
            <h1 className={styles.heroName}>
              {profile.name}
            </h1>

            {/* Role Hierarchy: CPO / CHIEF PRODUCT OFFICER @ YARSABYTE */}
            <div className={styles.roleHierarchy}>
              <div className={styles.rolePrimaryRow}>
                {profile.shortRole && (
                  <>
                    <span className={styles.roleShort}>{profile.shortRole}</span>
                    <span className={styles.roleDivider}>—</span>
                  </>
                )}
                <span className={styles.roleFull}>{profile.headlineRole || profile.role.replace(/^.*?—\s*/, '').toUpperCase()}</span>
              </div>
              <div className={styles.companyTag}>
                @ {profile.company?.toUpperCase() || 'YARSABYTE'}
              </div>
              {profile.additionalRoles && (
                <div className={styles.additionalRolesTag}>
                  {profile.additionalRoles.toUpperCase()}
                </div>
              )}
            </div>

            {/* Concise Positioning Statement */}
            <p className={styles.positioningStatement}>
              &ldquo;{profile.tagline || 'Shaping products, building applications and creating digital experiences at YarsaByte.'}&rdquo;
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a href="#contact" className="btn-editorial-primary">
                <span>Get In Touch</span>
                <ArrowUpRight size={17} />
              </a>

              <a href="#work" className="btn-editorial-secondary">
                <span>Explore My Work</span>
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Socials Bar */}
            <div className={styles.socialsBar}>
              <span className={styles.socialLabel}>CONNECT</span>
              <div className={styles.iconList}>
                {profile.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIconBtn}
                    aria-label={`Connect via ${soc.label}`}
                    title={soc.label}
                  >
                    {renderSocialIcon(soc.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait */}
          <div className={styles.visualCol}>
            <div className={styles.portraitCard}>
              <div className={styles.portraitWrapper}>
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} — ${profile.role} at YarsaByte`}
                  width={700}
                  height={875}
                  priority
                  className={styles.portraitImg}
                />
                <div className={styles.portraitOverlay} />
              </div>

              {/* Editorial Frame Floating Badge */}
              <div className={styles.floatingMetaCard}>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>ORGANIZATION</span>
                  <span className={styles.metaVal}>{profile.company || 'YarsaByte'}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>PRIMARY ROLE</span>
                  <span className={styles.metaVal}>{profile.shortRole || 'CPO'}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>LOCATION</span>
                  <span className={styles.metaVal}>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
