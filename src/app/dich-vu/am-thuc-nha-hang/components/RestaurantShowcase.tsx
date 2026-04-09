import { type FC } from 'react';
import Image from 'next/image';

const showcaseFeatures = [
  {
    icon: '📸',
    title: 'Gallery ảnh món ăn đẹp mắt',
    description: 'Trưng bày món ăn với ảnh chất lượng cao, lightbox gallery, lazy loading thông minh và layout masonry bắt mắt thu hút khách hàng ngay lập tức.',
    highlight: 'Visual First',
  },
  {
    icon: '🗓️',
    title: 'Hệ thống đặt bàn thời gian thực',
    description: 'Xem trực tiếp số bàn còn trống, chọn khu vực ngồi (VIP, ngoài trời, riêng tư), đặt trước menu và yêu cầu đặc biệt. Xác nhận tức thì qua Zalo/SMS.',
    highlight: 'Real-time Booking',
  },
  {
    icon: '🍽️',
    title: 'Thực đơn số tương tác',
    description: 'Menu kỹ thuật số với ảnh đẹp, giá cập nhật linh hoạt, lọc theo chế độ ăn (chay, gluten-free), tags allergen và gợi ý pairing đồ uống.',
    highlight: 'Digital Menu',
  },
  {
    icon: '🎉',
    title: 'Quản lý sự kiện & tiệc',
    description: 'Nhận yêu cầu tổ chức tiệc sinh nhật, hội nghị, đám cưới. Form báo giá tự động, quản lý timeline sự kiện và giao tiếp trực tiếp với nhà hàng.',
    highlight: 'Event Management',
  },
];

const RestaurantShowcase: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-catchie-blue/3 rounded-full blur-[100px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Nổi Bật
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Trải nghiệm ẩm thực{' '}
            <span className="text-brand-catchie-blue">từ màn hình đến bàn ăn</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Thiết kế website nhà hàng không chỉ cần đẹp – cần kể được câu chuyện ẩm thực 
            và dẫn dắt khách hàng từ lần đầu ghé thăm đến khi đặt bàn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Features list */}
          <div className="lg:col-span-5 space-y-5">
            {showcaseFeatures.map((feature, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400/60 via-amber-400/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20
                    flex items-center justify-center text-2xl
                    group-hover:bg-brand-catchie-blue/20 group-hover:border-brand-catchie-blue/40
                    group-hover:shadow-[0_0_20px_rgba(93,173,226,0.2)] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-heading text-white font-semibold text-base">{feature.title}</h3>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-amber-400/15 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Showcase image */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_restaurant.png"
                      alt="Giao diện website nhà hàng với hệ thống đặt bàn thông minh"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>

                <div className="absolute top-6 left-6 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">Bàn trống hôm nay: 12</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 cosmic-surface rounded-lg px-3 py-2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">Đặt bàn tuần này:</span>
                    <span className="text-amber-400 text-xs font-bold">284 lượt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantShowcase;
