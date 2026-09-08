'use client';

import React, { useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MemberProfile } from '@/types/member';
import { CheckCircle, Clock, Globe, Mail, MapPin, Send } from 'lucide-react';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  profile: MemberProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
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
    if (!formData.message.trim()) errs.message = 'Please write a brief message';
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

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contact" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="05" title="LET'S TALK" />

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info & Availability */}
          <div className={styles.infoCol}>
            <h2 className="editorial-heading-lg">
              Start a Conversation
            </h2>
            <p className="editorial-lead">
              Reach out directly to discuss technical advisory, studio collaborations, or platform architecture with YarsaByte.
            </p>

            {/* Direct Channel Cards */}
            <div className={styles.channelsList}>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>STUDIO INQUIRIES</span>
                  <a href={`mailto:${profile.contact.yarsaEmail}`} className={styles.channelLink}>
                    {profile.contact.yarsaEmail}
                  </a>
                </div>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>DIRECT PERSONAL EMAIL</span>
                  <a href={`mailto:${profile.contact.email}`} className={styles.channelLink}>
                    {profile.contact.email}
                  </a>
                </div>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <MapPin size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>BASED IN</span>
                  <span className={styles.channelText}>{profile.contact.location}</span>
                </div>
              </div>

              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Clock size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <span className={styles.channelLabel}>TIMEZONE</span>
                  <span className={styles.channelText}>{profile.contact.timezone}</span>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className={styles.statusBox}>
              <div className={styles.statusHeader}>
                <span className={styles.pulseActiveDot} />
                <span className={styles.statusHeading}>CURRENT AVAILABILITY</span>
              </div>
              <p className={styles.statusText}>{profile.contact.availability}</p>
              <span className={styles.expectationNote}>
                {profile.contact.responseExpectation}
              </span>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <p className={styles.formSubtitle}>
                Direct message to {profile.name} via YarsaByte communications.
              </p>

              {status === 'success' ? (
                <div className={styles.successNotice} role="alert">
                  <CheckCircle size={28} className={styles.successIcon} />
                  <div>
                    <h4 className={styles.successTitle}>Message Dispatched</h4>
                    <p className={styles.successText}>
                      Thank you! Your note has been received. {profile.name} or the YarsaByte team will get back to you shortly.
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
                      YOUR NAME <span className={styles.req}>*</span>
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
                      EMAIL ADDRESS <span className={styles.req}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@enterprise.com"
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
                      INQUIRY SUBJECT
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={styles.select}
                    >
                      <option value="Project Inquiry">New Project Collaboration</option>
                      <option value="Technical Advisory">Architecture &amp; Technical Advisory</option>
                      <option value="Speaking or Mentorship">Workshop / Mentorship</option>
                      <option value="General Conversation">General Coffee &amp; Say Hello</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="contact-message" className={styles.label}>
                      MESSAGE <span className={styles.req}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`Tell ${profile.name} about your idea, scope, or timeline...`}
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
