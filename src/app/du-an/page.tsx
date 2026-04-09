import type { Metadata } from 'next';
import PortfolioSection from '@/components/sections/PortfolioSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Dự Án Tiêu Biểu | CATCHIE',
  description: 'Khám phá các dự án thiết kế website nổi bật mà CATCHIE đã thực hiện cho khách hàng.',
};

export default function PortfolioPage() {
  return (
    <main className="pt-24 pb-10 bg-brand-deep-space min-h-screen">
      <PortfolioSection />
      <CtaBanner />
    </main>
  );
}
