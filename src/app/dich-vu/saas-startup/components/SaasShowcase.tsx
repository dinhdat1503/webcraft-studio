import { type FC } from 'react';
import Image from 'next/image';

const showcaseFeatures = [
  {
    icon: '🎯',
    title: 'Hero section chuyển đổi cao',
    description: 'Headline rõ ràng + value proposition + CTA nổi bật + demo/screenshot sản phẩm. Được tối ưu A/B test để đạt conversion rate tối đa.',
    highlight: 'High CVR',
  },
  {
    icon: '⚡',
    title: 'Pricing page thuyết phục',
    description: 'So sánh gói rõ ràng, highlight gói phổ biến, FAQ giải quyết objection và toggle billing yearly/monthly kích thích upgrade.',
    highlight: 'Pricing UX',
  },
  {
    icon: '🔐',
    title: 'Auth & Onboarding flow',
    description: 'Social login, magic link, step-by-step onboarding với progress bar, empty state hướng dẫn và tooltip in-app thông minh.',
    highlight: 'Seamless Auth',
  },
  {
    icon: '📊',
    title: 'Dashboard & User portal',
    description: 'Giao diện quản lý tài khoản, billing, team members, API keys và usage analytics được thiết kế trực quan và dễ sử dụng.',
    highlight: 'User Portal',
  },
];

const SaasShowcase: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-catchie-blue/4 rounded-full blur-[100px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Nổi Bật
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Những gì tạo nên{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-brand-catchie-blue">
              startup thành công
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Mỗi tính năng đều được thiết kế để tối ưu hành trình người dùng – từ
            lần đầu ghé thăm đến khi trở thành khách hàng trả phí trung thành.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            {showcaseFeatures.map((feature, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400/60 via-violet-400/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-violet-500/10 border border-violet-500/20
                    flex items-center justify-center text-2xl
                    group-hover:bg-violet-500/20 group-hover:border-violet-500/40
                    group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-heading text-white font-semibold text-base">{feature.title}</h3>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-violet-500/15 text-violet-400 text-[10px] font-bold uppercase tracking-wider">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 relative">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/15 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_landing.png"
                      alt="Landing page SaaS với tỷ lệ chuyển đổi tối ưu"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 left-6 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">Conversion Rate: 12.4%</span>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 cosmic-surface rounded-lg px-3 py-2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">Trial signups / ngày:</span>
                    <span className="text-violet-400 text-xs font-bold">340+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasShowcase;
