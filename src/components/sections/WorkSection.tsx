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
            YarsaByte Work &amp; Contributions
          </h2>
          <p className="editorial-lead">
            Selected products, platforms, and creative media I have contributed to through YarsaByte.
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
                  <span className={styles.clientTag}>{project.client || 'YarsaByte Project'}</span>
                  <span className={styles.yearTag}>{project.year}</span>
                </div>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <div className={styles.rolesGroup}>
                  <div className={styles.roleBadge}>
                    <span className={styles.roleLabel}>MY ROLE:</span>
                    <span className={styles.roleValue}>{project.role}</span>
                  </div>

                  {project.contribution && (
                    <div className={styles.contributionBox}>
                      <span className={styles.contributionLabel}>CONTRIBUTION:</span>
                      <p className={styles.contributionText}>{project.contribution}</p>
                    </div>
                  )}
                </div>

                <p className={styles.projectDesc}>
                  {project.description}
                </p>

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
