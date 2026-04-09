import { type FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Tăng lượng khách hàng tiềm năng',
    description:
      'SEO tối ưu cho từ khóa bất động sản địa phương, Google Maps listing và quảng cáo nhắm mục tiêu giúp tăng lead chất lượng lên đến 3x.',
    stat: '3x',
    statLabel: 'Lead Quality',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Rút ngắn thời gian giao dịch',
    description:
      'Tour 3D và thông tin BĐS đầy đủ giúp khách hàng ra quyết định nhanh hơn 40%. Lịch hẹn xem nhà online tiết kiệm thời gian cho cả hai bên.',
    stat: '-40%',
    statLabel: 'Decision Time',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Xây dựng thương hiệu uy tín',
    description:
      'Giao diện chuyên nghiệp, thông tin minh bạch và hệ thống đánh giá xác thực giúp xây dựng niềm tin với người mua/thuê BĐS.',
    stat: '+180%',
    statLabel: 'Brand Trust',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: 'Quản lý tập trung, hiệu quả',
    description:
      'Toàn bộ listing, khách hàng, lịch hẹn và hợp đồng được quản lý trên một nền tảng. Tiết kiệm 60% thời gian vận hành cho đội ngũ môi giới.',
    stat: '-60%',
    statLabel: 'Operation Time',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'Lên top Google tìm kiếm địa phương',
    description:
      'Tối ưu SEO cho từ khóa BĐS theo tỉnh thành, quận huyện. Schema markup chuyên biệt giúp xuất hiện nổi bật trong kết quả tìm kiếm.',
    stat: 'Top 3',
    statLabel: 'Local SEO',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2v-2H6v2a2 2 0 002 2zM13 5.5A.5.5 0 0112.5 5h-1a.5.5 0 010-1h1a.5.5 0 01.5.5zm-1-4A8.5 8.5 0 004 10h16a8.5 8.5 0 00-8-8.5z"/>
      </svg>
    ),
    title: 'Hỗ trợ & bảo trì 24/7',
    description:
      'Đội ngũ kỹ thuật luôn sẵn sàng xử lý sự cố, bảo hành 12 tháng, cập nhật dữ liệu bản đồ định kỳ và tư vấn chiến lược nội dung BĐS.',
    stat: '12',
    statLabel: 'Months Warranty',
  },
];

const RealEstateBenefits: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/15 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />

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
            Chúng tôi không chỉ xây website – chúng tôi xây dựng nền tảng số giúp doanh nghiệp
            bất động sản của bạn tăng trưởng bền vững.
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/8 rounded-full blur-[40px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon + stat */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20
                    flex items-center justify-center text-emerald-400
                    group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40
                    group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-emerald-400 leading-none">{benefit.stat}</p>
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

export default RealEstateBenefits;
