import React from 'react';

interface SectionLabelProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionLabel({ number, title, className = '' }: SectionLabelProps) {
  return (
    <div className={`editorial-num-label ${className}`}>
      <span>{number} — {title}</span>
    </div>
  );
}
