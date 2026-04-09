import type { Metadata } from 'next';
import { type FC } from 'react';
import ServicesSection from '@/components/sections/ServicesSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Dịch Vụ | CATCHIE',
  description: 'Khám phá các dịch vụ thiết kế website, thương mại điện tử và giải pháp số chuyên nghiệp từ CATCHIE.',
};

const ServicesPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-deep-space">
      <ServicesSection />
      <CtaBanner />
    </main>
  );
};

export default ServicesPage;
