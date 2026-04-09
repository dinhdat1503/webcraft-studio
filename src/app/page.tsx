import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import { TechStackSection, ProcessSection } from '@/components/sections/TechAndProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import BlogSection from '@/components/sections/BlogSection';
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
      <PricingSection />
      <ProcessSection />
      <BlogSection />
      <CtaBanner />
    </>
  );
}
