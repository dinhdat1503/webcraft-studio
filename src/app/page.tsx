import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import { TechStackSection, ProcessSection } from '@/components/sections/TechAndProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import { pricingData } from '@/data/pricing.data';
import CtaBanner from '@/components/sections/CtaBanner';

/** Trang chủ – tập hợp tất cả các section */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <TechStackSection />
      <PricingSection 
        tag="Bảng Giá"
        title={<>Gói dịch vụ phù hợp<br />cho <span className="text-brand-catchie-blue">mọi nhu cầu</span></>}
        description="Chúng tôi cam kết mang lại giá trị thực sự với mức đầu tư hợp lý nhất thị trường"
        data={pricingData}
      />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
