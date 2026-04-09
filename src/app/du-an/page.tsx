import type { Metadata } from 'next';
import { type FC } from 'react';
import PortfolioSection from '@/components/sections/PortfolioSection';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Dự Án Tiêu Biểu | CATCHIE',
  description: 'Khám phá các dự án thiết kế website nổi bật mà CATCHIE đã thực hiện cho khách hàng.',
};

const PortfolioPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-deep-space">
      <PortfolioSection />
      <CtaBanner />
    </main>
  );
};

export default PortfolioPage;
