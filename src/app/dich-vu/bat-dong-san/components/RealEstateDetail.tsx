import { type FC } from 'react';
import Image from 'next/image';

const detailFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: 'Quản lý listing đa dạng',
    description:
      'Đăng tin bán/cho thuê/dự án với hệ thống phê duyệt tự động, lịch đăng bài thông minh và hiển thị nổi bật ưu tiên theo gói dịch vụ.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    title: 'Bản đồ tích hợp Google Maps',
    description:
      'Hiển thị bản đồ tương tác với heatmap giá, phân tầng khu vực, đánh dấu dự án mới và tích hợp Street View trực tiếp trên trang.',
    color: 'from-brand-catchie-blue/20 to-blue-400/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
      </svg>
    ),
    title: 'Thông báo & cảnh báo thông minh',
    description:
      'Khách hàng nhận thông báo tức thì qua email/Zalo/SMS khi có BĐS phù hợp nhu cầu. Hệ thống so sánh giá thị trường tự động.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Công cụ tính vay mua nhà',
    description:
      'So sánh gói vay từ 20+ ngân hàng, tính lãi suất thực tế, lên lịch trả nợ và xuất báo cáo kế hoạch tài chính chi tiết dạng PDF.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Dashboard quản trị môi giới',
    description:
      'Trang quản lý riêng cho môi giới: theo dõi hiệu suất, quản lý danh mục BĐS, lịch hẹn xem nhà và thống kê doanh thu theo thời gian thực.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    ),
    title: 'Và nhiều tính năng khác...',
    description:
      'CRM khách hàng tiềm năng, live chat tư vấn, review & rating BĐS, so sánh tối đa 4 căn hộ, chia sẻ mạng xã hội và phiên bản ứng dụng di động.',
    color: 'from-slate-500/20 to-slate-400/20',
  },
];

const RealEstateDetail: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-emerald-500/4 rounded-full blur-[140px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Chi Tiết
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Nền tảng BĐS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-catchie-blue">
              đầy đủ tính năng
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Từng tính năng được nghiên cứu và tối ưu dựa trên hành vi thực tế của
            người mua, người bán và nhà môi giới bất động sản Việt Nam.
          </p>
        </div>

        {/* Image + features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Image Left */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_realestate.png"
                      alt="Dashboard quản trị bất động sản đầy đủ tính năng"
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
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">PageSpeed: 96/100</span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 cosmic-surface rounded-lg px-4 py-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span className="text-white/70 text-xs">Môi giới đang sử dụng: <span className="text-white font-bold">1,200+</span></span>
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
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20
                    flex items-center justify-center text-emerald-400
                    group-hover:bg-emerald-500/25 group-hover:border-emerald-500/50
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

export default RealEstateDetail;
