import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { MemberProfile } from '@/types/member';
import styles from './WorkSection.module.css';

interface WorkSectionProps {
  profile: MemberProfile;
}

export function WorkSection({ profile }: WorkSectionProps) {
  return (
    <section id="work" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="03" title="WORK / CONTRIBUTIONS" />

        <div className={styles.sectionHeader}>
          <h2 className="editorial-heading-lg">
            Selected YarsaByte Deliverables
          </h2>
          <p className="editorial-lead">
            Platforms, client engagements, and studio systems I have helped engineer and deploy at YarsaByte.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {profile.projects.map((project, idx) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.mediaContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className={styles.projectImg}
                />
                <div className={styles.mediaOverlay} />
                <span className={styles.projectNumber}>0{idx + 1}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMetaRow}>
                  <span className={styles.clientTag}>{project.client || 'YarsaByte Partnership'}</span>
                  <span className={styles.yearTag}>{project.year}</span>
                </div>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <div className={styles.roleBadge}>
                  <span className={styles.roleLabel}>MY CONTRIBUTION:</span>
                  <span className={styles.roleValue}>{project.role}</span>
                </div>

                <p className={styles.projectDesc}>
                  {project.description}
                </p>

                {project.impact && (
                  <div className={styles.impactBox}>
                    <span className={styles.impactLabel}>IMPACT:</span>
                    <span className={styles.impactText}>{project.impact}</span>
                  </div>
                )}

                <div className={styles.cardFooter}>
                  <div className={styles.tagsRow}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-circle-action"
                      aria-label={`View ${project.title} project`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
