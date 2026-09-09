'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight, Github, Globe, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { MemberProfile, SocialLink } from '@/types/member';
import styles from './Footer.module.css';

interface FooterProps {
  profile: MemberProfile;
}

export function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Role', href: '#role' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const renderSocialIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github':
        return <Github size={15} />;
      case 'linkedin':
        return <Linkedin size={15} />;
      case 'x':
        return <Twitter size={15} />;
      case 'instagram':
        return <Instagram size={15} />;
      case 'email':
        return <Mail size={15} />;
      case 'website':
        return <Globe size={15} />;
      default:
        return <ArrowUpRight size={15} />;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container-editorial">
        <div className={styles.mainGrid}>
          {/* Brand & Member Identity Column */}
          <div className={styles.identityCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoBox}>
                <Image
                  src="/brand/ico-bg.png"
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

            {/* Google Maps Location Preview */}
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

          {/* Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle} suppressHydrationWarning>LINKS</h4>
            <ul className={styles.linkList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className={styles.socialCol}>
            <h4 className={styles.colTitle} suppressHydrationWarning>SOCIAL</h4>
            <ul className={styles.linkList}>
              {profile.socials.map((soc) => (
                <li key={soc.platform}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLinkItem}
                  >
                    <span className={styles.miniIcon}>{renderSocialIcon(soc.platform)}</span>
                    <span>{soc.label}</span>
                    <ArrowUpRight size={13} className={styles.miniArrow} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright} suppressHydrationWarning>
            <span>&copy; {new Date().getFullYear()} YarsaByte</span>
            <span className={styles.dot}>•</span>
            <span>Member profile — {profile.name}</span>
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
