'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  memberName: string;
}

export function Header({ memberName }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll, handle Escape key, and manage focus for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Shift focus to the close button inside the drawer
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Role', href: '#role' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container-editorial ${styles.navContainer}`}>
          {/* Brand & Member Context */}
          <div className={styles.brandGroup}>
            <Link href="/" className={styles.brandLink} aria-label="YarsaByte Home">
              <div className={styles.logoWrapper}>
                <Image
                  src="/brand/yarsabyte-mark.svg"
                  alt="YarsaByte"
                  width={38}
                  height={38}
                  className={styles.logoImg}
                />
              </div>
              <span className={styles.brandWordmark}>YARSABYTE</span>
            </Link>

            <span className={styles.dividerSlash} aria-hidden="true">/</span>

            <div className={styles.memberBreadcrumb}>
              <span className={styles.breadcrumbBadge}>TEAM</span>
              <span className={styles.breadcrumbName}>{memberName.toUpperCase()}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className={styles.actionGroup}>
            <a
              href="#contact"
              className={styles.talkBtn}
              aria-label="Let's talk"
            >
              <span>Let&apos;s Talk</span>
              <span className={styles.arrowCircle}>
                <ArrowUpRight size={16} />
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              ref={toggleBtnRef}
              type="button"
              className={styles.mobileToggleBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <Image
              src="/brand/yarsabyte-mark.svg"
              alt="YarsaByte"
              width={32}
              height={32}
              className={styles.logoImg}
            />
            <span className={styles.drawerBrandText}>YARSABYTE / {memberName.toUpperCase()}</span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.drawerCloseBtn}
            onClick={() => {
              setMobileMenuOpen(false);
              toggleBtnRef.current?.focus();
            }}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <ul className={styles.drawerList}>
            {navLinks.map((link, idx) => (
              <li key={link.href} style={{ animationDelay: `${idx * 60}ms` }}>
                <a
                  href={link.href}
                  className={styles.drawerLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.drawerIndex}>0{idx + 1}</span>
                  <span className={styles.drawerLabel}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.drawerFooter}>
          <div className={styles.drawerMeta}>
            <span>CREATIVE TECHNOLOGY COLLECTIVE</span>
            <span>BUTWAL, NEPAL</span>
          </div>
          <a
            href="#contact"
            className="btn-editorial-primary"
            onClick={() => setMobileMenuOpen(false)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Get in touch with {memberName}
          </a>
        </div>
      </div>
    </>
  );
}
