import type { Metadata } from 'next';
import { type FC } from 'react';
import AboutSection from '@/components/sections/AboutSection';
import { TechStackSection, ProcessSection } from '@/components/sections/TechAndProcessSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Giới Thiệu | CATCHIE',
  description: 'Tìm hiểu về đội ngũ CATCHIE và quy trình làm việc chuyên nghiệp của chúng tôi.',
};

const AboutPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-deep-space">
      <AboutSection />
      <TechStackSection />
      <ProcessSection />
      <CtaBanner />
    </main>
  );
};

export default AboutPage;
