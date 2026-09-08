import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MemberProfile } from '@/types/member';
import styles from './IntroSection.module.css';

interface IntroSectionProps {
  profile: MemberProfile;
}

export function IntroSection({ profile }: IntroSectionProps) {
  return (
    <section id="intro" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="01" title="INTRODUCTION" />

        <div className={styles.introGrid}>
          {/* Left Column: Heading & Metadata Cards */}
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              {profile.bioHeading}
            </h2>

            {/* Metadata Badges Card */}
            <div className={styles.metadataCard}>
              <h3 className={styles.metaCardTitle}>AFFILIATION PROFILE</h3>
              <div className={styles.metaList}>
                {profile.metadata.map((item, idx) => (
                  <div key={idx} className={styles.metaItem}>
                    <span className={styles.metaKey}>{item.label}</span>
                    <span className={styles.metaVal}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Text & Quote */}
          <div className={styles.rightCol}>
            <div className={styles.paragraphs}>
              {profile.bioParagraphs.map((para, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {para}
                </p>
              ))}
            </div>

            {profile.philosophyQuote && (
              <blockquote className={styles.quoteBox}>
                <p className={styles.quoteText}>
                  &ldquo;{profile.philosophyQuote.text}&rdquo;
                </p>
                {profile.philosophyQuote.author && (
                  <cite className={styles.quoteCite}>
                    — {profile.philosophyQuote.author}, YarsaByte
                  </cite>
                )}
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
