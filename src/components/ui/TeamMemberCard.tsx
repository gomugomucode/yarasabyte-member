import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { TeamTeammate } from '@/types/member';
import { getMemberCanonicalUrl } from '@/lib/member-domain';
import styles from './TeamMemberCard.module.css';

export interface TeamMemberCardProps {
  member: TeamTeammate;
  isCurrent?: boolean;
}

export function TeamMemberCard({ member, isCurrent = false }: TeamMemberCardProps) {
  const isAnupam = member.slug.toLowerCase() === 'anupam';
  // In development, link to local /team/[slug]; in production, link to canonical custom domain
  const profileUrl =
    process.env.NODE_ENV === 'development'
      ? `/team/${member.slug}`
      : getMemberCanonicalUrl(member.slug);

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
          {isCurrent ? (
            <h3 className={styles.memberName} suppressHydrationWarning>{member.name}</h3>
          ) : (
            <Link href={profileUrl} className={styles.nameLink} suppressHydrationWarning>
              <h3 className={styles.memberName} suppressHydrationWarning>{member.name}</h3>
            </Link>
          )}
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
              href={profileUrl}
              className={styles.viewProfileBtn}
              aria-label={`View ${member.name}'s profile`}
              suppressHydrationWarning
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
