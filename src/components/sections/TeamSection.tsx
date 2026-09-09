import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
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
          <h2 className="editorial-heading-lg" suppressHydrationWarning>
            YarsaByte Leadership &amp; Core Team
          </h2>
          <p className="editorial-lead">
            The executive leadership and interdisciplinary team steering product, technology, brand, operations, and vision at YarsaByte.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {team.map((member) => {
            const isCurrent = member.slug.toLowerCase() === currentSlug.toLowerCase();
            return (
              <TeamMemberCard
                key={member.slug}
                member={member}
                isCurrent={isCurrent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
