import type { Metadata } from 'next';
import HealthcareHero from './components/HealthcareHero';
import HealthcareOverview from './components/HealthcareOverview';
import HealthcareShowcase from './components/HealthcareShowcase';
import HealthcareDetail from './components/HealthcareDetail';
import HealthcareBenefits from './components/HealthcareBenefits';
import HealthcareTech from './components/HealthcareTech';
import HealthcareCTA from './components/HealthcareCTA';

export const metadata: Metadata = {
  title: 'Thiết Kế Website Y Tế & Phòng Khám Chuyên Nghiệp | CATCHIE',
  description:
    'CATCHIE xây dựng nền tảng y tế số toàn diện: đặt lịch hẹn trực tuyến, hồ sơ bệnh nhân điện tử, telemedicine, quản lý phòng khám và bảo mật dữ liệu chuẩn quốc tế.',
  keywords: [
    'thiết kế website y tế',
    'website phòng khám',
    'đặt lịch hẹn bác sĩ online',
    'CATCHIE',
    'phần mềm quản lý phòng khám',
    'telemedicine việt nam',
  ],
  openGraph: {
    title: 'Thiết Kế Website Y Tế & Phòng Khám Chuyên Nghiệp | CATCHIE',
    description:
      'Nền tảng y tế số toàn diện – đặt lịch hẹn 24/7, hồ sơ bệnh nhân điện tử, telemedicine bảo mật và quản lý phòng khám chuyên nghiệp.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang chi tiết dịch vụ Website Y Tế & Sức Khỏe */
export default function HealthcarePage() {
  return (
    <>
      <HealthcareHero />
      <HealthcareOverview />
      <HealthcareShowcase />
      <HealthcareDetail />
      <HealthcareBenefits />
      <HealthcareTech />
      <HealthcareCTA />
    </>
  );
}
