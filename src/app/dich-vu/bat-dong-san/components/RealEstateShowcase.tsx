import { type FC } from 'react';
import Image from 'next/image';

const showcaseFeatures = [
  {
    icon: '🔍',
    title: 'Tìm kiếm & lọc nâng cao',
    description:
      'Bộ lọc đa tiêu chí thông minh: khu vực, mức giá, diện tích, loại hình BĐS, tiện ích lân cận. Kết quả cập nhật real-time không cần reload trang.',
    highlight: 'Smart Search',
  },
  {
    icon: '🏙️',
    title: 'Tour 3D & video walkthrough',
    description:
      'Tích hợp Matterport 3D, video 360° và AR preview giúp khách hàng tham quan bất động sản từ xa như đang trực tiếp tại hiện trường.',
    highlight: 'Virtual Tour',
  },
  {
    icon: '📍',
    title: 'Bản đồ & tiện ích xung quanh',
    description:
      'Hiển thị vị trí trên Google Maps, tính toán khoảng cách và thời gian di chuyển đến trường học, bệnh viện, trung tâm thương mại.',
    highlight: 'Location Intel',
  },
  {
    icon: '💰',
    title: 'Công cụ tài chính thông minh',
    description:
      'Tính toán vay mua nhà theo từng ngân hàng, so sánh lãi suất, lên kế hoạch tài chính và ước tính chi phí sở hữu BĐS toàn diện.',
    highlight: 'Finance Tools',
  },
];

const RealEstateShowcase: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-catchie-blue/4 rounded-full blur-[100px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Nổi Bật
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Trải nghiệm tìm kiếm BĐS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-catchie-blue">
              vượt trội
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Hệ thống được thiết kế để rút ngắn hành trình mua bán bất động sản –
            từ tìm kiếm, khám phá đến quyết định đặt cọc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Features list */}
          <div className="lg:col-span-5 space-y-5">
            {showcaseFeatures.map((feature, i) => (
              <div
                key={i}
                className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default relative overflow-hidden"
              >
                {/* Glow line on left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/20
                    flex items-center justify-center text-2xl
                    group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40
                    group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-heading text-white font-semibold text-base">{feature.title}</h3>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
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
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/15 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_realestate.png"
                      alt="Website bất động sản với tính năng tìm kiếm nâng cao"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>

                {/* Floating labels */}
                <div className="absolute top-6 left-6 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">2,500+ listings đang hoạt động</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 cosmic-surface rounded-lg px-3 py-2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">Người dùng/tháng:</span>
                    <span className="text-emerald-400 text-xs font-bold">85K+</span>
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

export default RealEstateShowcase;
