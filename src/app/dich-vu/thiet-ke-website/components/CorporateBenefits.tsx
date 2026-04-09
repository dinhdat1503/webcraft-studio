import { type FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Xây dựng uy tín thương hiệu',
    description: 'Website chuyên nghiệp tạo niềm tin với đối tác và khách hàng ngay từ lần đầu tiếp xúc. Tăng tỷ lệ chuyển đổi lên đến 270%.',
    stat: '+270%',
    statLabel: 'Brand Trust',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'Top 3 kết quả tìm kiếm Google',
    description: 'Cấu trúc SEO chuẩn kỹ thuật từ đầu giúp website leo hạng nhanh chóng. Organic traffic tăng trung bình 185% sau 6 tháng.',
    stat: 'Top 3',
    statLabel: 'Google Search',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Tốc độ tải nhanh vượt trội',
    description: 'Core Web Vitals đạt chuẩn Google, PageSpeed 95+, CDN toàn cầu. Giảm tỷ lệ thoát trang và cải thiện SEO đáng kể.',
    stat: '95+',
    statLabel: 'PageSpeed',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: 'Quản lý nội dung dễ dàng',
    description: 'CMS hiện đại giúp team của bạn tự cập nhật nội dung mà không cần biết code. Phân quyền linh hoạt cho từng bộ phận.',
    stat: '0',
    statLabel: 'Code Required',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Bảo mật cấp doanh nghiệp',
    description: 'SSL EV, WAF, DDoS Protection, backup tự động hàng ngày. Dữ liệu doanh nghiệp được bảo vệ theo tiêu chuẩn quốc tế.',
    stat: '99.9%',
    statLabel: 'Uptime SLA',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Hỗ trợ & bảo trì dài hạn',
    description: 'Đội ngũ kỹ thuật sẵn sàng 24/7, bảo hành 12 tháng sau bàn giao, cập nhật tính năng định kỳ và tư vấn chiến lược số.',
    stat: '12',
    statLabel: 'Months Warranty',
  },
];

const CorporateBenefits: FC = () => {
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
            Chúng tôi không chỉ xây website – chúng tôi xây dựng nền tảng số giúp doanh nghiệp 
            bạn phát triển bền vững trong kỷ nguyên số.
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

export default CorporateBenefits;
