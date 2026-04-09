import type { Metadata } from 'next';
import RealEstateHero from './components/RealEstateHero';
import RealEstateOverview from './components/RealEstateOverview';
import RealEstateShowcase from './components/RealEstateShowcase';
import RealEstateDetail from './components/RealEstateDetail';
import RealEstateBenefits from './components/RealEstateBenefits';
import RealEstateTech from './components/RealEstateTech';
import RealEstateCTA from './components/RealEstateCTA';

export const metadata: Metadata = {
  title: 'Thiết Kế Website Bất Động Sản Chuyên Nghiệp | CATCHIE',
  description:
    'CATCHIE cung cấp giải pháp thiết kế website bất động sản toàn diện với tìm kiếm thông minh, tour 3D trực tuyến, bản đồ tương tác và công cụ tài chính tích hợp.',
  keywords: [
    'thiết kế website bất động sản',
    'website bds chuyên nghiệp',
    'real estate website',
    'CATCHIE',
    'website mua bán nhà đất',
    'tour 3d bất động sản',
  ],
  openGraph: {
    title: 'Thiết Kế Website Bất Động Sản Chuyên Nghiệp | CATCHIE',
    description:
      'Nền tảng bất động sản số toàn diện – tìm kiếm thông minh, tour 3D, bản đồ tương tác và hệ thống quản lý listing chuyên nghiệp.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang chi tiết dịch vụ Website Bất Động Sản */
export default function RealEstatePage() {
  return (
    <>
      <RealEstateHero />
      <RealEstateOverview />
      <RealEstateShowcase />
      <RealEstateDetail />
      <RealEstateBenefits />
      <RealEstateTech />
      <RealEstateCTA />
    </>
  );
}
