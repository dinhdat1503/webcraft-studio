import { type FC } from 'react';
import Image from 'next/image';

const detailFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Giao diện sang trọng, đậm chất thương hiệu',
    description: 'Thiết kế thể hiện đúng phong cách nhà hàng – fine dining, bistro hay quán cà phê. Palette màu, typography và ảnh được chọn lựa kỹ lưỡng.',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'QR Menu & Order tại bàn',
    description: 'Mã QR tự động tạo cho mỗi bàn, gọi món trực tiếp trên điện thoại, thanh toán không tiếp xúc và chia bill dễ dàng cho nhóm đông.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Chương trình thành viên & loyalty',
    description: 'Hệ thống tích điểm, ưu đãi member, quản lý voucher sinh nhật và thông báo chương trình khuyến mãi qua Zalo OA tự động.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    title: 'Tích hợp Google Maps & Chỉ đường',
    description: 'Bản đồ tương tác hiển thị vị trí, chỉ đường từ nhiều điểm xuất phát, thông tin bãi đỗ xe và giờ mở cửa cập nhật tự động theo lịch.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Analytics & Báo cáo doanh thu',
    description: 'Theo dõi lượt xem menu, tỷ lệ đặt bàn, món bán chạy nhất và phân tích hành vi khách hàng để tối ưu chiến lược kinh doanh.',
    color: 'from-brand-catchie-blue/20 to-blue-400/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    ),
    title: 'Và nhiều tính năng khác...',
    description: 'Blog ẩm thực SEO, Instagram feed tích hợp, pop-up khuyến mãi, chatbot tư vấn, form đặt tiệc riêng và tích hợp POS hệ thống.',
    color: 'from-slate-500/20 to-slate-400/20',
  },
];

const RestaurantDetail: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-amber-500/4 rounded-full blur-[140px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Chi Tiết
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Nền tảng số hoàn chỉnh{' '}
            <span className="text-brand-catchie-blue">cho ngành F&B</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Từ thực đơn số đến quản lý đặt bàn, loyalty program đến phân tích kinh doanh –
            chúng tôi xây dựng hệ sinh thái số toàn diện cho nhà hàng của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Image Left */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_restaurant.png"
                      alt="Tính năng chi tiết website nhà hàng ẩm thực"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>

                <div className="absolute top-5 right-5 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-xs">⭐</span>
                    <span className="text-white text-xs font-bold">Loyalty: 1,240 thành viên</span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 cosmic-surface rounded-lg px-4 py-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">Doanh thu tháng qua:</span>
                    <span className="text-green-400 text-xs font-bold">+28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Right */}
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            {detailFeatures.map((feature, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-5 group cursor-default relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20
                    flex items-center justify-center text-brand-catchie-blue
                    group-hover:bg-brand-catchie-blue/25 group-hover:border-brand-catchie-blue/50 transition-all duration-300">
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

export default RestaurantDetail;
