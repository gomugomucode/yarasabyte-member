import React from 'react';
import { MemberProfile, TeamTeammate } from '@/types/member';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { RoleSection } from '@/components/sections/RoleSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

interface MemberPageTemplateProps {
  profile: MemberProfile;
  team: TeamTeammate[];
}

export function MemberPageTemplate({ profile, team }: MemberPageTemplateProps) {
  return (
    <SiteFrame>
      <Header memberName={profile.name} />
      <main id="content">
        <HeroSection profile={profile} />
        {/* <IntroSection profile={profile} /> */}
        <RoleSection profile={profile} />
        <WorkSection profile={profile} />
        <TeamSection currentSlug={profile.slug} team={team} />
        <ContactSection profile={profile} />
      </main>
      <Footer profile={profile} />
    </SiteFrame>
  );
}
