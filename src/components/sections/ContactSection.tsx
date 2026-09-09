import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ContactForm } from '@/components/ui/ContactForm';
import { MemberProfile, SocialLink } from '@/types/member';
import {
  ArrowUpRight,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
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
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'x':
        return <Twitter size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      case 'email':
        return <Mail size={18} />;
      case 'website':
        return <Globe size={18} />;
      default:
        return <ArrowUpRight size={18} />;
    }
  };

  return (
    <section id="contact" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="05" title="LET'S TALK" />

        <div className={styles.contactGrid}>
          {/* LEFT COLUMN: Direct Details */}
          <div className={styles.infoCol}>
            <h2 className="editorial-heading-lg" suppressHydrationWarning>
              Have an idea worth building?
            </h2>
            <p className="editorial-lead">
              Reach out directly to discuss product direction, application development, or creative video collaborations with YarsaByte.
            </p>

            <div className={styles.directChannelsList}>
              {/* Email */}
              <div className={styles.directChannelItem}>
                <div className={styles.channelIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.channelTextGroup}>
                  <span className={styles.channelLabel}>EMAIL</span>
                  <a href={`mailto:${profile.contact.email}`} className={styles.channelLink}>
                    {profile.contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className={styles.directChannelItem}>
                <div className={styles.channelIcon}>
                  <MapPin size={18} />
                </div>
                <div className={styles.channelTextGroup}>
                  <span className={styles.channelLabel}>LOCATION</span>
                  <a
                    href="https://maps.google.com/?q=Butwal%2C+Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.channelLink}
                  >
                    <span>{profile.contact.location}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Personal Website */}
              {profile.contact.website && (
                <div className={styles.directChannelItem}>
                  <div className={styles.channelIcon}>
                    <Globe size={18} />
                  </div>
                  <div className={styles.channelTextGroup}>
                    <span className={styles.channelLabel}>WEBSITE</span>
                    <a
                      href={profile.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.channelLink}
                    >
                      <span>{profile.contact.website.replace('https://', '')}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Social Network Row */}
            <div className={styles.socialChannelsBlock}>
              <span className={styles.socialBlockLabel}>PROFILES &amp; SOCIAL</span>
              <div className={styles.socialChips}>
                {profile.socials.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialChip}
                    aria-label={`Visit ${soc.label}`}
                  >
                    <span className={styles.chipIcon}>{renderSocialIcon(soc.platform)}</span>
                    <span className={styles.chipLabel}>{soc.label}</span>
                    <ArrowUpRight size={13} className={styles.chipArrow} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Isolated Client Contact Form */}
          <div className={styles.formCol}>
            <ContactForm recipientSlug={profile.slug} recipientName={profile.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
