import type { Metadata } from 'next';
import EcommerceHero from './components/EcommerceHero';
import EcommerceOverview from './components/EcommerceOverview';
import ProductShowcase from './components/ProductShowcase';
import ProductDetail from './components/ProductDetail';
import EcommerceBenefits from './components/EcommerceBenefits';
import EcommerceTech from './components/EcommerceTech';
import EcommerceCTA from './components/EcommerceCTA';

export const metadata: Metadata = {
  title: 'Thiết Kế Website Thương Mại Điện Tử | CATCHIE',
  description:
    'CATCHIE cung cấp giải pháp thiết kế website thương mại điện tử chuyên nghiệp với giao diện hiện đại, bộ lọc AI thông minh, tích hợp thanh toán đa kênh và quản lý đơn hàng dễ dàng.',
  keywords: [
    'thiết kế website thương mại điện tử',
    'website bán hàng',
    'e-commerce',
    'CATCHIE',
    'cửa hàng trực tuyến',
  ],
  openGraph: {
    title: 'Thiết Kế Website Thương Mại Điện Tử | CATCHIE',
    description:
      'Giải pháp website TMĐT toàn diện – giao diện bắt mắt, quản lý đơn hàng thông minh, tăng doanh số bán hàng.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang chi tiết dịch vụ Thương mại điện tử */
export default function EcommercePage() {
  return (
    <>
      <EcommerceHero />
      <EcommerceOverview />
      <ProductShowcase />
      <ProductDetail />
      <EcommerceBenefits />
      <EcommerceTech />
      <EcommerceCTA />
    </>
  );
}
