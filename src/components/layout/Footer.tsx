import React from 'react';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { MemberProfile } from '@/types/member';
import styles from './Footer.module.css';

interface FooterProps {
  profile: MemberProfile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container-editorial">
        <div className={styles.mainGrid}>
          {/* Brand & Member Identity Column */}
          <div className={styles.identityCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoBox}>
                <Image
                  src="/brand/yarsabyte-mark.svg"
                  alt="YarsaByte Logo"
                  width={46}
                  height={46}
                  className={styles.logoImg}
                />
              </div>
              <span className={styles.brandTitle}>YARSABYTE</span>
            </div>

            <div className={styles.memberMetaBlock}>
              <h3 className={styles.memberName} suppressHydrationWarning>{profile.name}</h3>
              <p className={styles.memberRoles}>
                {profile.shortRole ? `${profile.shortRole} — ${profile.role.replace(/^.*?—\s*/, '')}` : profile.role}
                {profile.additionalRoles ? ` · ${profile.additionalRoles}` : ''}
              </p>
              <p className={styles.memberLocation}>
                {profile.company || 'YarsaByte'} — {profile.location}
              </p>
            </div>
          </div>

          {/* Map Column */}
          <div className={styles.mapCol}>
            <div className={styles.mapContainer}>
              <iframe
                title={`Google Map of ${profile.location}`}
                src="https://maps.google.com/maps?q=Butwal%2C%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Butwal%2C+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapPinLink}
              >
                <span>View on Google Maps</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright} suppressHydrationWarning>
            <span>&copy; {new Date().getFullYear()} YarsaByte</span>
            <span className={styles.dot}>•</span>
            <span>Member profile — {profile.name}</span>
          </div>

          <a
            href="#overview"
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className={styles.topIconCircle}>
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
