import type { Metadata } from 'next';
import ServicesSection from '@/components/sections/ServicesSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Dịch Vụ | CATCHIE',
  description: 'Khám phá các dịch vụ thiết kế website, thương mại điện tử và giải pháp số chuyên nghiệp từ CATCHIE.',
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-10 bg-brand-deep-space min-h-screen">
      <ServicesSection />
      <CtaBanner />
    </main>
  );
}
