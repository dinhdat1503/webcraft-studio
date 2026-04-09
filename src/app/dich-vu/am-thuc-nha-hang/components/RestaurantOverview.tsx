import { type FC } from 'react';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Đặt bàn trực tuyến thông minh',
    desc: 'Hệ thống đặt bàn real-time, xác nhận tức thì qua SMS/email, quản lý sơ đồ chỗ ngồi và nhắc lịch tự động cho khách hàng.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: 'Thực đơn số hấp dẫn',
    desc: 'Menu trực tuyến với ảnh chất lượng cao, mô tả hương vị chi tiết, lọc món theo dị ứng thực phẩm và gọi món QR code tại bàn.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    title: 'Order & Delivery tích hợp',
    desc: 'Gọi món trực tuyến, chọn pickup hay delivery, tích hợp GrabFood, ShopeeFood và theo dõi đơn hàng real-time.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
    title: 'Đánh giá & Review khách hàng',
    desc: 'Hệ thống review tích hợp, phản hồi từ chủ nhà hàng, tổng hợp đánh giá từ Google Maps và các nền tảng khác.',
  },
];

const RestaurantOverview: FC = () => {
  return (
    <section id="overview" className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/3 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tổng Quan Dịch Vụ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Đưa ẩm thực của bạn{' '}
            <span className="text-brand-catchie-blue">lên tầm cao mới</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Website nhà hàng không chỉ là tờ menu online – đây là không gian trải nghiệm số 
            giúp khách hàng yêu thích thương hiệu của bạn trước khi bước vào cửa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/15 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative cosmic-surface rounded-2xl overflow-hidden">
              <div className="aspect-[16/10]">
                <Image
                  src="/assets/portfolio/portfolio_restaurant.png"
                  alt="Giao diện website nhà hàng ẩm thực cao cấp La Maison"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="cosmic-surface rounded-xl px-4 py-3 backdrop-blur-md">
                  <p className="text-white font-heading font-bold text-sm">La Maison Fine Dining</p>
                  <p className="text-white/50 text-xs">Nhà hàng Pháp cao cấp tại TP.HCM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default">
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

export default RestaurantOverview;
