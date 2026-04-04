import { type FC } from 'react';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    title: 'Giỏ hàng thông minh',
    desc: 'Quản lý giỏ hàng trực quan, tự động tính phí ship, áp dụng voucher dễ dàng.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: 'Thanh toán đa kênh',
    desc: 'Tích hợp VNPAY, MoMo, ZaloPay, COD, chuyển khoản ngân hàng và nhiều hơn nữa.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Bảng điều khiển phân tích',
    desc: 'Theo dõi doanh số, hành vi khách hàng và tồn kho theo thời gian thực.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Responsive hoàn hảo',
    desc: 'Giao diện tối ưu trên mọi thiết bị: Desktop, Tablet và Smartphone.',
  },
];

const EcommerceOverview: FC = () => {
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
            Những gì chúng tôi có thể{' '}
            <span className="text-brand-catchie-blue">đem lại</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Một website đầy đủ với những tiện ích hiện đại nhất, giúp doanh nghiệp của bạn 
            bán hàng trực tuyến hiệu quả và chuyên nghiệp hơn bao giờ hết.
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
                  src="/assets/portfolio/portfolio_ecommerce.png"
                  alt="Giao diện website thương mại điện tử CATCHIE"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/60 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="cosmic-surface rounded-xl px-4 py-3 backdrop-blur-md">
                  <p className="text-white font-heading font-bold text-sm">FashionMall Vietnam</p>
                  <p className="text-white/50 text-xs">Nền tảng thời trang trực tuyến cao cấp</p>
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

export default EcommerceOverview;
