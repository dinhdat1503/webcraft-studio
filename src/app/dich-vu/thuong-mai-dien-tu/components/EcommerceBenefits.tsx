import { type FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Tăng doanh số bán hàng',
    description: 'Giao diện tối ưu chuyển đổi giúp tăng tỷ lệ mua hàng lên tới 340%. Thiết kế hướng khách hàng đến hành động mua.',
    stat: '+340%',
    statLabel: 'Conversion Rate',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
    ),
    title: 'Quản lý đơn hàng dễ dàng',
    description: 'Dashboard quản lý trực quan, theo dõi trạng thái đơn hàng real-time, in hóa đơn và quản lý trả hàng nhanh chóng.',
    stat: '99.9%',
    statLabel: 'Uptime',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: 'Kết nối trực tiếp khách hàng',
    description: 'Tích hợp live chat, Zalo, Messenger và email marketing. Xây dựng mối quan hệ bền vững với khách hàng.',
    stat: '24/7',
    statLabel: 'Customer Support',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Tối ưu trải nghiệm người dùng',
    description: 'Responsive trên mọi thiết bị, tốc độ tải nhanh dưới 2 giây và thiết kế UI/UX theo chuẩn quốc tế.',
    stat: '<2s',
    statLabel: 'Load Time',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: 'Tích hợp thanh toán đa phương thức',
    description: 'Hỗ trợ VNPAY, MoMo, ZaloPay, thẻ tín dụng/ghi nợ quốc tế, COD và chuyển khoản ngân hàng.',
    stat: '10+',
    statLabel: 'Payment Methods',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'Hỗ trợ SEO & Marketing',
    description: 'Cấu trúc website chuẩn SEO, tích hợp Google Analytics, Facebook Pixel và công cụ marketing tự động.',
    stat: 'Top 10',
    statLabel: 'Google Ranking',
  },
];

const EcommerceBenefits: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/15 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-catchie-blue/5 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
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
            Chúng tôi không chỉ xây website – chúng tôi xây dựng cỗ máy bán hàng trực tuyến cho doanh nghiệp của bạn.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="cosmic-surface surface-hover rounded-2xl p-7 group cursor-default relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-catchie-blue/8 rounded-full blur-[40px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon + stat */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20 
                    flex items-center justify-center text-brand-catchie-blue
                    group-hover:bg-brand-catchie-blue/20 group-hover:border-brand-catchie-blue/40 
                    group-hover:shadow-[0_0_20px_rgba(93,173,226,0.2)] transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-brand-catchie-blue leading-none">{benefit.stat}</p>
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

export default EcommerceBenefits;
