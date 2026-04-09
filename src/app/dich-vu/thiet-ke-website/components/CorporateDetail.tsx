import { type FC } from 'react';
import Image from 'next/image';

const detailFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
      </svg>
    ),
    title: 'Layout linh hoạt & hiện đại',
    description: 'Bố cục trang được thiết kế theo chuẩn Grid System, dễ dàng tùy chỉnh và mở rộng theo nhu cầu doanh nghiệp. Hỗ trợ Dark/Light mode.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Hệ thống đa ngôn ngữ',
    description: 'Tích hợp i18n đầy đủ – chuyển đổi ngôn ngữ tức thì không reload trang. Hỗ trợ RTL cho thị trường Trung Đông và font đặc thù.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Dashboard quản trị mạnh mẽ',
    description: 'Giao diện admin trực quan với thống kê real-time, quản lý nội dung kéo thả và phân quyền chi tiết theo từng phòng ban.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'SEO Technical chuẩn kỹ thuật',
    description: 'Schema Markup, Open Graph, Sitemap tự động, Canonical URL, hreflang cho đa ngôn ngữ và tối ưu Core Web Vitals đạt chuẩn.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Bảo mật & tuân thủ pháp lý',
    description: 'SSL EV, WAF, GDPR/PDPA compliance, Cookie Consent, Privacy Policy tự động. Kiểm tra penetration test định kỳ bởi chuyên gia bảo mật.',
    color: 'from-brand-catchie-blue/20 to-blue-400/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    ),
    title: 'Và nhiều tính năng khác...',
    description: 'Tích hợp live chat, form liên hệ thông minh, newsletter, chatbot AI, map tương tác, gallery ảnh, video nền và animation cuộn mượt mà.',
    color: 'from-slate-500/20 to-slate-400/20',
  },
];

const CorporateDetail: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand-catchie-blue/4 rounded-full blur-[140px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Chi Tiết
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Website doanh nghiệp{' '}
            <span className="text-brand-catchie-blue">đầy đủ tính năng</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Mỗi website chúng tôi xây dựng đều được trang bị đầy đủ các tính năng 
            doanh nghiệp cần thiết – từ hiệu năng, bảo mật đến khả năng quản trị.
          </p>
        </div>

        {/* Image + features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Image Left */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-catchie-blue/10 via-transparent to-purple-500/10 rounded-3xl blur-xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_corporate.png"
                      alt="Giao diện website doanh nghiệp chi tiết với các tính năng"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>

                {/* Floating badges */}
                <div className="absolute top-5 right-5 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">SEO Score: 98/100</span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 cosmic-surface rounded-lg px-4 py-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945"/>
                    </svg>
                    <span className="text-white/70 text-xs">Hỗ trợ: <span className="text-white font-bold">6 ngôn ngữ</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Right */}
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            {detailFeatures.map((feature, i) => (
              <div
                key={i}
                className="cosmic-surface surface-hover rounded-2xl p-5 group cursor-default relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20 
                    flex items-center justify-center text-brand-catchie-blue
                    group-hover:bg-brand-catchie-blue/25 group-hover:border-brand-catchie-blue/50 
                    transition-all duration-300">
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

export default CorporateDetail;
