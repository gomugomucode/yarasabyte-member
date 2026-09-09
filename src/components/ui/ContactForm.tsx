'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import styles from '@/components/sections/ContactSection.module.css';

interface ContactFormProps {
  recipientSlug: string;
  recipientName: string;
}

export function ContactForm({ recipientSlug, recipientName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Product Collaboration',
    message: '',
  });

  const [hpWebsite, setHpWebsite] = useState('');
  const [formLoadedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionStatus, setSubmissionStatus] = useState<'accepted' | 'delivered' | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters long';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setServerError(null);
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recipientSlug,
          hp_website: hpWebsite,
          formLoadedAt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setServerError(data.error || 'Failed to dispatch message. Please try again.');
        if (data.details) {
          setErrors(data.details);
        }
        return;
      }

      setStatus('success');
      setSubmissionStatus(data.status === 'delivered' ? 'delivered' : 'accepted');
      setFormData({
        name: '',
        email: '',
        subject: 'Product Collaboration',
        message: '',
      });
    } catch {
      setStatus('error');
      setServerError('Network error. Please check your internet connection and try again.');
    }
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.formTitle} suppressHydrationWarning>Direct Message</h3>
      <p className={styles.formSubtitle}>
        Send a note directly to {recipientName} at YarsaByte.
      </p>

      {status === 'success' ? (
        <div className={styles.successNotice} role="alert">
          <CheckCircle size={32} className={styles.successIcon} />
          <div>
            <h4 className={styles.successTitle} suppressHydrationWarning>
              {submissionStatus === 'delivered' ? 'Message Delivered' : 'Inquiry Received'}
            </h4>
            <p className={styles.successText}>
              {submissionStatus === 'delivered'
                ? `Thank you! Your message has been delivered directly to ${recipientName}.`
                : `Thank you! Your inquiry has been received by our server and queued for ${recipientName}.`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setServerError(null);
            }}
            className="btn-editorial-secondary"
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          {serverError && (
            <div className={styles.serverErrorNotice} role="alert">
              <AlertCircle size={18} />
              <span>{serverError}</span>
            </div>
          )}

          {/* Honeypot field for bot protection (hidden from humans) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="hp-website">Leave this field blank</label>
            <input
              id="hp-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={hpWebsite}
              onChange={(e) => setHpWebsite(e.target.value)}
            />
          </div>

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
              placeholder={`Tell ${recipientName} about your project or idea...`}
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
  );
}
