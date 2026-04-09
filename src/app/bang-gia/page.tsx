import type { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Bảng Giá | CATCHIE',
  description: 'Tham khảo bảng giá thiết kế website và các gói giải pháp số từ CATCHIE.',
};

export default function PricingPage() {
  return (
    <main className="pt-24 pb-10 bg-brand-catchie-navy min-h-screen">
      <PricingSection />
      <CtaBanner />
    </main>
  );
}
