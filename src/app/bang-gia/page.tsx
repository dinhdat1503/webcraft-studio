import type { Metadata } from 'next';
import { type FC } from 'react';
import PricingSection from '@/components/sections/PricingSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Bảng Giá | CATCHIE',
  description: 'Tham khảo bảng giá thiết kế website và các gói giải pháp số từ CATCHIE.',
};

const PricingPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-catchie-navy">
      <PricingSection />
      <CtaBanner />
    </main>
  );
};

export default PricingPage;
