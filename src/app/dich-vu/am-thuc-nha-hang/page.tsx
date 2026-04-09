import type { Metadata } from 'next';
import RestaurantHero from './components/RestaurantHero';
import RestaurantOverview from './components/RestaurantOverview';
import RestaurantShowcase from './components/RestaurantShowcase';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantBenefits from './components/RestaurantBenefits';
import RestaurantTech from './components/RestaurantTech';
import RestaurantCTA from './components/RestaurantCTA';

export const metadata: Metadata = {
  title: 'Thiết Kế Website Nhà Hàng Ẩm Thực Chuyên Nghiệp | CATCHIE',
  description:
    'CATCHIE thiết kế website nhà hàng, quán cà phê, F&B chuyên nghiệp với hệ thống đặt bàn online, thực đơn số hấp dẫn, tích hợp Zalo OA và delivery đa nền tảng.',
  keywords: [
    'thiết kế website nhà hàng',
    'website ẩm thực',
    'website quán cà phê',
    'f&b website',
    'CATCHIE',
    'đặt bàn trực tuyến',
  ],
  openGraph: {
    title: 'Thiết Kế Website Nhà Hàng Ẩm Thực Chuyên Nghiệp | CATCHIE',
    description:
      'Website nhà hàng đẳng cấp – đặt bàn online 24/7, menu số hấp dẫn, loyalty program và tích hợp delivery đa nền tảng.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang chi tiết dịch vụ Website Ẩm Thực & Nhà Hàng */
export default function RestaurantPage() {
  return (
    <>
      <RestaurantHero />
      <RestaurantOverview />
      <RestaurantShowcase />
      <RestaurantDetail />
      <RestaurantBenefits />
      <RestaurantTech />
      <RestaurantCTA />
    </>
  );
}
