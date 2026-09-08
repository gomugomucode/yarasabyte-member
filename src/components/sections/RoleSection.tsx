import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MemberProfile } from '@/types/member';
import { CheckCircle2 } from 'lucide-react';
import styles from './RoleSection.module.css';

interface RoleSectionProps {
  profile: MemberProfile;
}

export function RoleSection({ profile }: RoleSectionProps) {
  return (
    <section id="role" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="02" title="MY ROLE AT YARSABYTE" />

        <div className={styles.sectionHeader}>
          <h2 className="editorial-heading-lg">
            Core Responsibilities &amp; Technical Ownership
          </h2>
          <p className="editorial-lead">
            How I contribute day-to-day across client deliverables, engineering architecture, and YarsaByte’s collective standards.
          </p>
        </div>

        {/* 1. Categorized Responsibilities Grid */}
        <div className={styles.respGrid}>
          {profile.responsibilities.map((resp, idx) => (
            <div key={idx} className={styles.respCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>0{idx + 1}</span>
                <h3 className={styles.cardTitle}>{resp.title}</h3>
              </div>

              <p className={styles.cardSummary}>{resp.summary}</p>

              <ul className={styles.itemList}>
                {resp.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.listItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2. Technical Disciplines & Domain Proficiencies */}
        <div className={styles.competenciesBlock}>
          <div className={styles.subBlockHeader}>
            <span className="editorial-num-label">DISCIPLINES &amp; COMPETENCIES</span>
            <h3 className="editorial-heading-md">Technical Capabilities</h3>
            <p className={styles.subLead}>
              Categorized proficiencies honed through production client launches and system deployments.
            </p>
          </div>

          <div className={styles.competencyGrid}>
            {profile.competencies.map((cat, idx) => (
              <div key={idx} className={styles.competencyCard}>
                <h4 className={styles.categoryTitle}>{cat.category}</h4>
                <div className={styles.tagWrap}>
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Milestones Timeline if available */}
        {profile.milestones && profile.milestones.length > 0 && (
          <div className={styles.milestonesBlock}>
            <div className={styles.subBlockHeader}>
              <span className="editorial-num-label">MILESTONES &amp; TIMELINE</span>
              <h3 className="editorial-heading-md">Studio Trajectory</h3>
            </div>

            <div className={styles.timelineList}>
              {profile.milestones.map((m, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timeYear}>{m.year}</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>{m.title}</h4>
                    <p className={styles.timelineDesc}>{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
