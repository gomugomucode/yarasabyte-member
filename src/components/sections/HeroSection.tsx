'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
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
      default:
        return <ArrowUpRight size={18} />;
    }
  };

  return (
    <section id="overview" className={`section-editorial ${styles.heroSection}`}>
      <div className="container-editorial">
        {/* Top Eyebrow Tag */}
        <div className={styles.eyebrowRow}>
          <div className="badge-pill accent">
            <span className={styles.pulseDot} aria-hidden="true" />
            <span>YARSABYTE COLLECTIVE</span>
          </div>
          <span className={styles.locationText}>{profile.location}</span>
        </div>

        {/* Hero Main Grid */}
        <div className={styles.heroGrid}>
          {/* Left Column: Name, Role & Statement */}
          <div className={styles.contentCol}>
            <div className={styles.roleTag}>
              <span>{profile.role}</span>
            </div>

            <h1 className={styles.heroName}>
              {profile.name}
            </h1>

            <p className={styles.positioningStatement}>
              {profile.positioningStatement}
            </p>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a href="#contact" className="btn-editorial-primary">
                <span>Start a Conversation</span>
                <ArrowDownRight size={18} />
              </a>

              <a href="#work" className="btn-editorial-secondary">
                <span>View Contributions</span>
              </a>
            </div>

            {/* Socials & Meta Bar */}
            <div className={styles.socialsBar}>
              <span className={styles.socialLabel}>DIRECT CHANNELS</span>
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
                  <span className={styles.metaVal}>YarsaByte</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>ROLE</span>
                  <span className={styles.metaVal}>{profile.subRole}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>SINCE</span>
                  <span className={styles.metaVal}>{profile.joinedYear}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
