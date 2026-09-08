import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { TeamTeammate } from '@/types/member';
import styles from './TeamMemberCard.module.css';

export interface TeamMemberCardProps {
  member: TeamTeammate;
  isCurrent?: boolean;
}

export function TeamMemberCard({ member, isCurrent = false }: TeamMemberCardProps) {
  const isAnupam = member.slug.toLowerCase() === 'anupam';

  return (
    <div
      className={`${styles.memberCard} ${isCurrent ? styles.activeMemberCard : ''}`}
      data-testid={`team-card-${member.slug}`}
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
          <span className={styles.currentBadge}>Current Profile</span>
        )}
      </div>

      <div className={styles.memberInfo}>
        <div className={styles.nameRow}>
          <h3 className={styles.memberName}>{member.name}</h3>
          {!isCurrent && (
            <span className={styles.cardArrow} aria-hidden="true">
              <ArrowUpRight size={17} />
            </span>
          )}
        </div>

        <p className={styles.memberRole}>{member.role}</p>

        {isAnupam && member.additionalRoles && (
          <div className={styles.secondaryCapabilities}>
            <span className={styles.secondaryLabel}>CAPABILITIES:</span>
            <span className={styles.secondaryText}>
              {member.additionalRoles.toUpperCase()}
            </span>
          </div>
        )}

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
}
