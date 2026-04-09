import { type FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Tăng lượt đặt bàn trực tuyến',
    description: 'Hệ thống booking 24/7 giúp nhà hàng nhận đặt bàn ngay cả khi đóng cửa. Tăng tỷ lệ đặt trước lên 280% so với chỉ nhận qua điện thoại.',
    stat: '+280%',
    statLabel: 'Online Bookings',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    ),
    title: 'Nâng cao hình ảnh thương hiệu',
    description: 'Website đẹp sang trọng tạo kỳ vọng cao, thu hút khách tầm trung đến cao cấp. Đánh giá trung bình tăng từ 3.8 lên 4.7 sao sau 3 tháng.',
    stat: '4.7★',
    statLabel: 'Avg Rating',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'Xuất hiện trên Google Maps & SEO',
    description: 'Tối ưu Local SEO giúp nhà hàng xuất hiện top kết quả khi khách tìm kiếm theo khu vực. Traffic từ Google tăng 320% sau 6 tháng.',
    stat: '+320%',
    statLabel: 'Local Traffic',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Giữ chân khách hàng trung thành',
    description: 'Chương trình loyalty, thông báo ưu đãi sinh nhật và push notification tự động qua Zalo OA giúp khách hàng quay lại thường xuyên hơn 65%.',
    stat: '+65%',
    statLabel: 'Return Rate',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: 'Quản lý dễ dàng, tiết kiệm nhân lực',
    description: 'CMS thân thiện giúp cập nhật menu, giá, chương trình khuyến mãi trong vài phút mà không cần kỹ thuật viên. Tiết kiệm 15 giờ/tuần.',
    stat: '15h',
    statLabel: 'Saved/Week',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    title: 'Tích hợp delivery đa nền tảng',
    description: 'Kết nối GrabFood, ShopeeFood, Baemin. Quản lý đơn từ tất cả kênh trên một màn hình, giảm thiểu sai sót và tối ưu thời gian giao hàng.',
    stat: '3+',
    statLabel: 'Delivery Platforms',
  },
];

const RestaurantBenefits: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/4 rounded-full blur-[120px]" />

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
            Chúng tôi không chỉ xây website – chúng tôi xây dựng hệ sinh thái số giúp nhà hàng 
            của bạn phát triển và thu hút thêm hàng trăm khách mỗi tháng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <div key={i} className="cosmic-surface surface-hover rounded-2xl p-7 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/6 rounded-full blur-[40px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
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

export default RestaurantBenefits;
