import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Liên Hệ & Tư Vấn Miễn Phí | CATCHIE',
  description:
    'Liên hệ CATCHIE để nhận tư vấn miễn phí về thiết kế website, e-commerce, landing page và các giải pháp số cho doanh nghiệp. SĐT: 0971 69 2675.',
  keywords: [
    'liên hệ CATCHIE',
    'tư vấn thiết kế website',
    'báo giá website',
    'CATCHIE',
  ],
  openGraph: {
    title: 'Liên Hệ & Tư Vấn Miễn Phí | CATCHIE',
    description:
      'Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia CATCHIE. SĐT: 0971 69 2675.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang Liên hệ & Tư vấn */
export default function ContactPage() {
  return <ContactContent />;
}
