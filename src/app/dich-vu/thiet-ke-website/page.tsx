import type { Metadata } from 'next';
import CorporateHero from './components/CorporateHero';
import CorporateOverview from './components/CorporateOverview';
import CorporateShowcase from './components/CorporateShowcase';
import CorporateDetail from './components/CorporateDetail';
import CorporateBenefits from './components/CorporateBenefits';
import CorporateTech from './components/CorporateTech';
import CorporateCTA from './components/CorporateCTA';

export const metadata: Metadata = {
  title: 'Thiết Kế Website Doanh Nghiệp Chuyên Nghiệp | CATCHIE',
  description:
    'CATCHIE cung cấp dịch vụ thiết kế website doanh nghiệp chuyên nghiệp với UI/UX độc quyền, PageSpeed 95+, bảo mật doanh nghiệp và CMS dễ quản lý. Bảo hành 12 tháng.',
  keywords: [
    'thiết kế website doanh nghiệp',
    'website công ty chuyên nghiệp',
    'corporate website design',
    'CATCHIE',
    'thiết kế web cao cấp',
  ],
  openGraph: {
    title: 'Thiết Kế Website Doanh Nghiệp Chuyên Nghiệp | CATCHIE',
    description:
      'Website doanh nghiệp chuyên nghiệp – UI/UX độc quyền, PageSpeed 95+, bảo mật cấp doanh nghiệp và hỗ trợ 24/7.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang chi tiết dịch vụ Thiết Kế Website Doanh Nghiệp */
export default function CorporatePage() {
  return (
    <>
      <CorporateHero />
      <CorporateOverview />
      <CorporateShowcase />
      <CorporateDetail />
      <CorporateBenefits />
      <CorporateTech />
      <CorporateCTA />
    </>
  );
}
