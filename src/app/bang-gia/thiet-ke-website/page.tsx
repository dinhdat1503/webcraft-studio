import type { Metadata } from 'next';
import { type FC } from 'react';
import PricingSection from '@/components/sections/PricingSection';
import CtaBanner from '@/components/sections/CtaBanner';
import { pricingData } from '@/data/pricing.data';

export const metadata: Metadata = {
  title: 'Bảng Giá Thiết Kế Website | CATCHIE',
  description: 'Tham khảo bảng giá thiết kế website từ CATCHIE.',
};

const WebDesignPricingPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-catchie-navy">
      <PricingSection 
        tag="Bảng Giá Thiết Kế Website"
        title={<>Gói dịch vụ phù hợp<br />cho <span className="text-brand-catchie-blue">mọi nhu cầu</span></>}
        description="Chúng tôi cam kết mang lại giá trị thực sự với mức đầu tư hợp lý nhất thị trường"
        data={pricingData}
      />
      <CtaBanner />
    </main>
  );
};

export default WebDesignPricingPage;
