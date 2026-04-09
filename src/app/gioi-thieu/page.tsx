import type { Metadata } from 'next';
import AboutSection from '@/components/sections/AboutSection';
import { TechStackSection, ProcessSection } from '@/components/sections/TechAndProcessSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Giới Thiệu | CATCHIE',
  description: 'Tìm hiểu về đội ngũ CATCHIE và quy trình làm việc chuyên nghiệp của chúng tôi.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-10 bg-brand-deep-space min-h-screen">
      <AboutSection />
      <TechStackSection />
      <ProcessSection />
      <CtaBanner />
    </main>
  );
}
