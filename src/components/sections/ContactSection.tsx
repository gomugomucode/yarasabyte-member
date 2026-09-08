'use client';

import React, { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MemberProfile, SocialLink } from '@/types/member';
import {
  ArrowUpRight,
  CheckCircle,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  profile: MemberProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Product Collaboration',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a brief message';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Product Collaboration',
        message: '',
      });
    }, 850);
  };

  const renderSocialIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
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
            <h2 className="editorial-heading-lg">
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

          {/* RIGHT COLUMN: Contact Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Direct Message</h3>
              <p className={styles.formSubtitle}>
                Send a note directly to {profile.name} at YarsaByte.
              </p>

              {status === 'success' ? (
                <div className={styles.successNotice} role="alert">
                  <CheckCircle size={32} className={styles.successIcon} />
                  <div>
                    <h4 className={styles.successTitle}>Message Dispatched</h4>
                    <p className={styles.successText}>
                      Thank you! Your inquiry has been received. {profile.name} will respond shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-editorial-secondary"
                    style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className={styles.form}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-name" className={styles.label}>
                      NAME <span className={styles.req}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Shrestha"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && (
                      <span id="name-error" className={styles.fieldError}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-email" className={styles.label}>
                      EMAIL <span className={styles.req}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@domain.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && (
                      <span id="email-error" className={styles.fieldError}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-subject" className={styles.label}>
                      SUBJECT
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={styles.select}
                    >
                      <option value="Product Collaboration">Product Planning &amp; Direction</option>
                      <option value="App Development">Application Development</option>
                      <option value="Video & Creative">Video Editing &amp; Media Production</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-message" className={styles.label}>
                      MESSAGE <span className={styles.req}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell ${profile.name} about your project or idea...`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && (
                      <span id="message-error" className={styles.fieldError}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-editorial-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'submitting' ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
