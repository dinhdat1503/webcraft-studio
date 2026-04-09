import { type FC } from 'react';
import Image from 'next/image';

const detailFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
      </svg>
    ),
    title: 'A/B Testing & Multivariate',
    description: 'Hệ thống thử nghiệm A/B và multivariate tích hợp sẵn cho phép test nhiều biến thể cùng lúc. Tự động chọn winner dựa trên statistical significance.',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
      </svg>
    ),
    title: 'Behavioral Trigger Notifications',
    description: 'Hiển thị popup, slide-in và notification bar thông minh dựa trên hành vi: exit intent, scroll depth, time on page, source traffic.',
    color: 'from-brand-catchie-blue/20 to-blue-400/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    title: 'Live Chat & Chatbot AI',
    description: 'Tích hợp Intercom, Crisp hoặc chatbot AI tùy chỉnh. Tự động giải đáp câu hỏi thường gặp, qualify lead và chuyển giao cho sales team.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Referral & Viral Loop System',
    description: 'Hệ thống referral tích hợp với tracking link riêng cho từng user, dashboard theo dõi chuỗi giới thiệu và phát thưởng tự động.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: 'Stripe / PayOS Billing',
    description: 'Tích hợp cổng thanh toán quốc tế Stripe và PayOS Việt Nam. Hỗ trợ subscription, one-time payment, trial period và invoice tự động.',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    ),
    title: 'Và nhiều tính năng khác...',
    description: 'Product tour tương tác, Feature flags, Changelog public, Status page, API docs tự động, Webhooks và Zapier integration sẵn có.',
    color: 'from-slate-500/20 to-slate-400/20',
  },
];

const SaasDetail: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-violet-500/4 rounded-full blur-[140px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Chi Tiết
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Bộ công cụ growth{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-brand-catchie-blue">
              đầy đủ cho startup
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Mọi thứ bạn cần để thu hút, chuyển đổi và giữ chân khách hàng –
            tất cả tích hợp trong một nền tảng duy nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_landing.png"
                      alt="Dashboard SaaS với đầy đủ growth tools"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>
                <div className="absolute top-5 right-5 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">MRR Growth: +28%/tháng</span>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 cosmic-surface rounded-lg px-4 py-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-white/70 text-xs">Active users: <span className="text-white font-bold">12,400+</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            {detailFeatures.map((feature, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-5 group cursor-default relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-violet-500/10 border border-violet-500/20
                    flex items-center justify-center text-violet-400
                    group-hover:bg-violet-500/25 group-hover:border-violet-500/50 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-white font-semibold text-base mb-1.5">{feature.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasDetail;
