import React, { ReactNode } from 'react';

interface SiteFrameProps {
  children: ReactNode;
}

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="site-viewport-wrapper">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="site-main-canvas">
        {children}
      </div>
    </div>
  );
}
