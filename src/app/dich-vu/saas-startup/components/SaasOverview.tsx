import { type FC } from 'react';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Tối ưu tỷ lệ chuyển đổi',
    desc: 'Thiết kế landing page với conversion rate optimization – CTA chiến lược, social proof, urgency triggers và funnel theo từng giai đoạn khách hàng.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'A/B Testing & Analytics',
    desc: 'Tích hợp sẵn Hotjar, Mixpanel, Google Analytics và hệ thống A/B test để liên tục tối ưu landing page qua dữ liệu thực tế.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Onboarding Flow mượt mà',
    desc: 'Xây dựng luồng đăng ký và onboarding người dùng thông minh, giảm tỷ lệ bỏ cuộc và tăng activation rate cho sản phẩm SaaS.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Growth Hacking Widgets',
    desc: 'Tích hợp referral system, popup thông minh, live visitor counter, countdown timer và social proof notification để thúc đẩy tăng trưởng.',
  },
];

const SaasOverview: FC = () => {
  return (
    <section id="overview" className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/3 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tổng Quan Dịch Vụ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Landing page SaaS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-brand-catchie-blue">
              bán hàng cho bạn 24/7
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Với startup, từng giây phụt đều quan trọng. Landing page của chúng tôi
            được tối ưu để chuyển visitor thành paying customer nhanh nhất có thể.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative cosmic-surface rounded-2xl overflow-hidden">
              <div className="aspect-[16/10]">
                <Image
                  src="/assets/portfolio/portfolio_landing.png"
                  alt="Landing page SaaS CloudFlow với tỷ lệ chuyển đổi cao"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="cosmic-surface rounded-xl px-4 py-3 backdrop-blur-md">
                  <p className="text-white font-heading font-bold text-sm">CloudFlow SaaS</p>
                  <p className="text-white/50 text-xs">Tăng trial signup lên 340% sau 30 ngày</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20
                  flex items-center justify-center mb-4
                  group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasOverview;
