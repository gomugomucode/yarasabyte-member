'use client';

import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MemberProfile, SocialLink } from '@/types/member';
import {
  ArrowUpRight,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Twitter,
} from 'lucide-react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  profile: MemberProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const renderSocialIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'x':
        return <Twitter size={20} />;
      case 'email':
        return <Mail size={20} />;
      default:
        return <ArrowUpRight size={20} />;
    }
  };

  return (
    <section id="contact" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="05" title="LET'S TALK" />

        <div className={styles.sectionHeader}>
          <h2 className="editorial-heading-lg">
            Start a Conversation
          </h2>
          <p className="editorial-lead">
            Reach out directly to discuss technical advisory, studio collaborations, or platform architecture with {profile.name} and YarsaByte.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className={styles.detailsGrid}>
          {/* 1. Direct Emails Card */}
          <div className={styles.detailCard}>
            <div className={styles.cardIconWrapper}>
              <Mail size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardCategory}>EMAIL CHANNELS</span>
              <h3 className={styles.cardTitle}>Direct Correspondence</h3>
              
              <div className={styles.channelRow}>
                <div className={styles.channelItem}>
                  <span className={styles.channelSubLabel}>STUDIO INQUIRIES</span>
                  <a href={`mailto:${profile.contact.yarsaEmail}`} className={styles.channelValueLink}>
                    <span>{profile.contact.yarsaEmail}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className={styles.channelItem}>
                  <span className={styles.channelSubLabel}>PERSONAL DIRECT</span>
                  <a href={`mailto:${profile.contact.email}`} className={styles.channelValueLink}>
                    <span>{profile.contact.email}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Location & Timezone Card */}
          <div className={styles.detailCard}>
            <div className={styles.cardIconWrapper}>
              <MapPin size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardCategory}>LOCATION &amp; TIME</span>
              <h3 className={styles.cardTitle}>Studio Headquarters</h3>

              <div className={styles.channelRow}>
                <div className={styles.channelItem}>
                  <span className={styles.channelSubLabel}>BASED IN</span>
                  <p className={styles.channelValueText}>{profile.contact.location}</p>
                </div>

                <div className={styles.channelItem}>
                  <span className={styles.channelSubLabel}>TIMEZONE</span>
                  <p className={styles.channelValueText}>
                    <Clock size={14} style={{ display: 'inline', marginRight: '5px' }} />
                    {profile.contact.timezone}
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Butwal%2C+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapActionLink}
              >
                <span>Locate on Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* 3. Availability & Response Times Card */}
          <div className={styles.detailCard}>
            <div className={styles.cardIconWrapper}>
              <MessageSquare size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardCategory}>AVAILABILITY</span>
              <h3 className={styles.cardTitle}>Current Engagement</h3>

              <div className={styles.statusIndicatorBox}>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>{profile.contact.availability}</span>
              </div>

              <p className={styles.expectationNote}>
                {profile.contact.responseExpectation}
              </p>
            </div>
          </div>

          {/* 4. Social Channels & Network */}
          <div className={styles.detailCard}>
            <div className={styles.cardIconWrapper}>
              <ArrowUpRight size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardCategory}>NETWORK</span>
              <h3 className={styles.cardTitle}>Direct Profiles</h3>

              <div className={styles.socialChips}>
                {profile.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialChip}
                  >
                    <span className={styles.chipIcon}>{renderSocialIcon(soc.platform)}</span>
                    <span className={styles.chipLabel}>{soc.label}</span>
                    <ArrowUpRight size={14} className={styles.chipArrow} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
