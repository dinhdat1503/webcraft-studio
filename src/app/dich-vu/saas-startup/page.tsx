import type { Metadata } from 'next';
import SaasHero from './components/SaasHero';
import SaasOverview from './components/SaasOverview';
import SaasShowcase from './components/SaasShowcase';
import SaasDetail from './components/SaasDetail';
import SaasBenefits from './components/SaasBenefits';
import SaasTech from './components/SaasTech';
import SaasCTA from './components/SaasCTA';

export const metadata: Metadata = {
  title: 'Thiết Kế Landing Page SaaS & Startup Chuyên Nghiệp | CATCHIE',
  description:
    'CATCHIE xây dựng landing page SaaS và startup với tỷ lệ chuyển đổi cao, A/B testing tích hợp, onboarding flow tối ưu và growth hacking widgets giúp tăng trưởng vượt bậc.',
  keywords: [
    'thiết kế landing page saas',
    'website startup',
    'landing page chuyển đổi cao',
    'CATCHIE',
    'growth hacking',
    'a/b testing',
  ],
  openGraph: {
    title: 'Thiết Kế Landing Page SaaS & Startup Chuyên Nghiệp | CATCHIE',
    description:
      'Landing page SaaS tối ưu chuyển đổi – A/B testing, onboarding flow, growth widgets và analytics tích hợp hoàn chỉnh.',
    type: 'website',
    locale: 'vi_VN',
  },
};

/** Trang chi tiết dịch vụ SaaS & Startup */
export default function SaasPage() {
  return (
    <>
      <SaasHero />
      <SaasOverview />
      <SaasShowcase />
      <SaasDetail />
      <SaasBenefits />
      <SaasTech />
      <SaasCTA />
    </>
  );
}
