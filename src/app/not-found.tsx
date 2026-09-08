import Link from 'next/link';
import Image from 'next/image';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getAllMembers } from '@/data';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  const members = getAllMembers();

  return (
    <SiteFrame>
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <Image
            src="/brand/ico-bg.png"
            alt="YarsaByte Logo"
            width={52}
            height={52}
            style={{ borderRadius: '12px' }}
          />
        </div>

        <span className="editorial-num-label" style={{ marginBottom: '1rem' }}>
          ERROR 404 — MEMBER NOT FOUND
        </span>

        <h1
          className="display-title"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}
        >
          PROFILE UNLOCATED
        </h1>

        <p
          className="editorial-lead"
          style={{ maxWidth: '520px', margin: '0 auto 2.5rem' }}
        >
          The requested YarsaByte member profile does not exist or has been relocated. You can explore our active collective below:
        </p>

        {/* Directory of active members */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            maxWidth: '680px',
            marginBottom: '3rem',
          }}
        >
          {members.map((m) => (
            <Link
              key={m.slug}
              href={`/team/${m.slug}`}
              className="btn-editorial-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
            >
              <span>{m.name}</span>
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>

        <Link href="/" className="btn-editorial-primary">
          <ArrowLeft size={16} />
          <span>Return to Team Home</span>
        </Link>
      </div>
    </SiteFrame>
  );
}
