import { type FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Tăng tỷ lệ chuyển đổi vượt bậc',
    description: 'Landing page được tối ưu CRO từ layout, màu sắc, copy đến UX flow. Trung bình khách hàng của chúng tôi tăng conversion rate 2–4x.',
    stat: '+340%',
    statLabel: 'Avg. Conversion',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Time-to-market nhanh nhất',
    description: 'Quy trình thiết kế-dev-launch tinh gọn. MVP landing page sẵn sàng trong 7–14 ngày. Iteration nhanh theo feedback thực tế.',
    stat: '14',
    statLabel: 'Days to Launch',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Data-driven quyết định',
    description: 'Dashboard analytics đầy đủ: funnel visualization, heatmap, session recording và cohort analysis giúp ra quyết định dựa trên dữ liệu.',
    stat: '100%',
    statLabel: 'Data Driven',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
    title: 'Hỗ trợ growth hacking 24/7',
    description: 'Đội ngũ growth expert sẵn sàng tư vấn chiến lược, phân tích data và đề xuất experiment mới để liên tục cải thiện kết quả.',
    stat: '24/7',
    statLabel: 'Growth Support',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Tốc độ tải siêu nhanh',
    description: 'PageSpeed 95+, Core Web Vitals xanh lá hoàn toàn. Tốc độ tải nhanh giảm bounce rate và tăng thứ hạng SEO đáng kể.',
    stat: '95+',
    statLabel: 'PageSpeed Score',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: 'Tích hợp thanh toán quốc tế',
    description: 'Stripe, PayPal, PayOS Việt Nam, MoMo, VNPay. Subscription billing, trial period, coupon code và invoice tự động gửi email.',
    stat: '10+',
    statLabel: 'Payment Gateways',
  },
];

const SaasBenefits: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Lợi Ích Vượt Trội
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Tại sao chọn{' '}
            <span className="text-brand-catchie-blue">CATCHIE?</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Chúng tôi không chỉ thiết kế landing page – chúng tôi xây dựng cỗ máy
            tăng trưởng giúp startup của bạn đạt Product-Market Fit nhanh hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <div key={i} className="cosmic-surface surface-hover rounded-2xl p-7 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/8 rounded-full blur-[40px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20
                    flex items-center justify-center text-violet-400
                    group-hover:bg-violet-500/20 group-hover:border-violet-500/40
                    group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-violet-400 leading-none">{benefit.stat}</p>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider font-bold mt-0.5">{benefit.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasBenefits;
