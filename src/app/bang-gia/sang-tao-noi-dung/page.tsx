import type { Metadata } from 'next';
import { type FC } from 'react';
import PricingSection from '@/components/sections/PricingSection';
import CtaBanner from '@/components/sections/CtaBanner';
import { contentPricing } from '@/data/pricing.data';

export const metadata: Metadata = {
  title: 'Bảng Giá Sáng Tạo Nội Dung | CATCHIE',
  description: 'Tham khảo bảng giá dịch vụ sáng tạo nội dung từ CATCHIE.',
};

const ContentPricingPage: FC = () => {
  return (
    <main className="min-h-screen pt-24 pb-10 bg-brand-catchie-navy">
      <PricingSection 
        tag="Bảng Giá Sáng Tạo Nội Dung"
        title={<>Giải pháp <span className="text-brand-catchie-blue">sáng tạo nội dung</span><br />cho doanh nghiệp</>}
        description="Sáng tạo không ngừng để làm mới hình ảnh thương hiệu của bạn"
        data={contentPricing}
      />
      <CtaBanner />
    </main>
  );
};

export default ContentPricingPage;
