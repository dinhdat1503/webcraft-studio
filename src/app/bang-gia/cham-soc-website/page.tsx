import type { Metadata } from 'next';
import { type FC } from 'react';
import PricingSection from '@/components/sections/PricingSection';
import CtaBanner from '@/components/sections/CtaBanner';
import { maintenancePricing } from '@/data/pricing.data';

export const metadata: Metadata = {
  title: 'Bảng Giá Chăm Sóc Website | CATCHIE',
  description: 'Tham khảo bảng giá chăm sóc website từ CATCHIE.',
};

const MaintenancePricingPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-catchie-navy">
      <PricingSection 
        tag="Bảng Giá Chăm Sóc Website"
        title={<>Giải pháp toàn diện<br />cho <span className="text-brand-catchie-blue">hệ thống web</span> của bạn</>}
        description="CATCHIE đồng hành cùng sự phát triển ổn định của website doanh nghiệp"
        data={maintenancePricing}
      />
      <CtaBanner />
    </main>
  );
};

export default MaintenancePricingPage;
