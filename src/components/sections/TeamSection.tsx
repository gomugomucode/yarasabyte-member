import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TeamTeammate } from '@/types/member';
import styles from './TeamSection.module.css';

interface TeamSectionProps {
  currentSlug: string;
  team: TeamTeammate[];
}

export function TeamSection({ currentSlug, team }: TeamSectionProps) {
  return (
    <section id="team" className="section-editorial section-editorial-border">
      <div className="container-editorial">
        <SectionLabel number="04" title="THE TEAM" />

        <div className={styles.sectionHeader}>
          <h2 className="editorial-heading-lg">
            YarsaByte is built together.
          </h2>
          <p className="editorial-lead">
            I work alongside an interdisciplinary collective of engineers, interface craftsmen, and systems thinkers at YarsaByte.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {team.map((member) => {
            const isCurrent = member.slug.toLowerCase() === currentSlug.toLowerCase();

            return (
              <div
                key={member.slug}
                className={`${styles.memberCard} ${isCurrent ? styles.activeMemberCard : ''}`}
              >
                <div className={styles.avatarWrapper}>
                  <Image
                    src={member.avatar}
                    alt={`${member.name} — ${member.role}`}
                    width={400}
                    height={400}
                    className={styles.avatarImg}
                  />
                  {isCurrent && (
                    <span className={styles.currentBadge}>
                      Current Profile
                    </span>
                  )}
                </div>

                <div className={styles.memberInfo}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    {!isCurrent && (
                      <span className={styles.cardArrow}>
                        <ArrowUpRight size={18} />
                      </span>
                    )}
                  </div>

                  <p className={styles.memberRole}>{member.role}</p>

                  <div className={styles.cardMeta}>
                    <span className={styles.focusTag}>{member.focus}</span>
                    <span className={styles.locTag}>{member.location}</span>
                  </div>

                  <div className={styles.cardActionRow}>
                    {isCurrent ? (
                      <span className={styles.viewingNotice}>Current Profile</span>
                    ) : (
                      <Link
                        href={`/team/${member.slug}`}
                        className={styles.viewProfileBtn}
                        aria-label={`View ${member.name}'s profile`}
                      >
                        <span>View profile</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
