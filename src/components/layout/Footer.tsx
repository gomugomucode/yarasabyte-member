'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { MemberProfile } from '@/types/member';
import styles from './Footer.module.css';

interface FooterProps {
  profile: MemberProfile;
}

export function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container-editorial">
        <div className={styles.mainGrid}>
          {/* Brand & Member Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoBox}>
                <Image
                  src="/brand/ico-bg.png"
                  alt="YarsaByte Logo"
                  width={44}
                  height={44}
                  className={styles.logoImg}
                />
              </div>
              <span className={styles.brandTitle}>YARSABYTE</span>
            </div>

            <p className={styles.memberBioBrief}>
              <strong>{profile.name}</strong> is {profile.role.toLowerCase()} at YarsaByte,
              a creative technology collective based in Butwal, Nepal.
            </p>

            <a
              href="https://yarshabyte.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.yarsaByteLink}
            >
              <span>Visit YarsaByte Agency Site</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Location, Timezone & Google Maps */}
          <div className={styles.locationMapCol}>
            <h4 className={styles.colTitle}>LOCATION &amp; STUDIO BASE</h4>
            
            <div className={styles.metaInfoRow}>
              <div className={styles.metaBlock}>
                <span className={styles.metaLabel}>HEADQUARTERS</span>
                <span className={styles.metaValue}>{profile.contact.location}</span>
              </div>
              <div className={styles.metaBlock}>
                <span className={styles.metaLabel}>TIMEZONE</span>
                <span className={styles.metaValue}>{profile.contact.timezone}</span>
              </div>
              <div className={styles.metaBlock}>
                <span className={styles.metaLabel}>DIRECT INQUIRIES</span>
                <a href={`mailto:${profile.contact.yarsaEmail}`} className={styles.emailLink}>
                  {profile.contact.yarsaEmail}
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className={styles.mapContainer}>
              <iframe
                title={`Google Map of ${profile.contact.location}`}
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
          <div className={styles.copyright}>
            <span>&copy; {new Date().getFullYear()} YarsaByte Creative Technology. All rights reserved.</span>
            <span className={styles.dot}>•</span>
            <span>Profile: {profile.name} ({profile.slug})</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className={styles.topIconCircle}>
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
