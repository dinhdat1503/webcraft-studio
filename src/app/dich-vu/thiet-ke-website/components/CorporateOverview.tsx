import { type FC } from 'react';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
      </svg>
    ),
    title: 'Thiết kế UI/UX độc quyền',
    desc: 'Mỗi website là tác phẩm nghệ thuật riêng biệt – không template, không sao chép. Phản ánh đúng bản sắc thương hiệu doanh nghiệp.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    title: 'Đa ngôn ngữ & Quốc tế hóa',
    desc: 'Hỗ trợ tiếng Việt, tiếng Anh và nhiều ngôn ngữ khác để doanh nghiệp vươn tầm quốc tế dễ dàng.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Tích hợp CRM & Analytics',
    desc: 'Kết nối với Salesforce, HubSpot, Google Analytics và các công cụ doanh nghiệp để theo dõi hiệu quả kinh doanh.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Bảo mật doanh nghiệp',
    desc: 'SSL Extended Validation, DDOS Protection, WAF và mã hóa dữ liệu theo chuẩn bảo mật doanh nghiệp quốc tế.',
  },
];

const CorporateOverview: FC = () => {
  return (
    <section id="overview" className="section-pad bg-brand-deep-space relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-catchie-blue/3 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tổng Quan Dịch Vụ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Website doanh nghiệp{' '}
            <span className="text-brand-catchie-blue">đẳng cấp</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Không chỉ là một trang web – đây là bộ mặt số của doanh nghiệp bạn. Chúng tôi xây dựng 
            website thể hiện đúng tầm vóc và giá trị thương hiệu của bạn.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-brand-catchie-blue/20 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative cosmic-surface rounded-2xl overflow-hidden">
              <div className="aspect-[16/10]">
                <Image
                  src="/assets/portfolio/portfolio_corporate.png"
                  alt="Giao diện website doanh nghiệp chuyên nghiệp CATCHIE"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/60 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="cosmic-surface rounded-xl px-4 py-3 backdrop-blur-md">
                  <p className="text-white font-heading font-bold text-sm">TechVision Corp</p>
                  <p className="text-white/50 text-xs">Tập đoàn công nghệ hàng đầu Đông Nam Á</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20 
                  flex items-center justify-center mb-4
                  group-hover:bg-brand-catchie-blue/20 group-hover:border-brand-catchie-blue/40 transition-all duration-300">
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

export default CorporateOverview;
