import { type FC } from 'react';
import Image from 'next/image';

const showcaseFeatures = [
  {
    icon: '🔍',
    title: 'Bộ lọc sản phẩm thông minh',
    description: 'Áp dụng trí tuệ nhân tạo khớp tìm kiếm, giúp khách hàng dễ dàng tìm được sản phẩm sát nhất dựa theo từ khóa. Hệ thống gợi ý tự động và tìm kiếm nhanh chóng.',
    highlight: 'AI-Powered',
  },
  {
    icon: '🖼️',
    title: 'Hình ảnh hiển thị bắt mắt',
    description: 'Khung hình động với hiệu ứng hover mượt mà, lazy loading thông minh và tối ưu hóa hình ảnh tự động cho mọi thiết bị.',
    highlight: 'Dynamic Frames',
  },
  {
    icon: '📂',
    title: 'Danh mục sản phẩm đa dạng',
    description: 'Phân loại sản phẩm tối ưu với cấu trúc đa cấp. Dễ dàng quản lý hàng nghìn sản phẩm với hệ thống danh mục thông minh.',
    highlight: 'Smart Categories',
  },
  {
    icon: '📞',
    title: 'Call to Action hiệu quả',
    description: 'Tích hợp Hotline, Zalo, Facebook Messenger và Live Chat trực tiếp trên website. Kết nối ngay lập tức với khách hàng tiềm năng.',
    highlight: 'Multi-Channel',
  },
];

const ProductShowcase: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-catchie-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-catchie-blue/3 rounded-full blur-[100px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Product Catalog
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Trang Trưng Bày{' '}
            <span className="text-brand-catchie-blue">Sản Phẩm</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Giao diện trưng bày sản phẩm hiện đại, tối ưu trải nghiệm mua sắm 
            và tăng tỷ lệ chuyển đổi cho cửa hàng trực tuyến của bạn.
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
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-catchie-blue/60 via-brand-catchie-blue/20 to-transparent
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
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-brand-catchie-blue/15 text-brand-catchie-blue text-[10px] font-bold uppercase tracking-wider">
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
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-catchie-blue/15 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/product_showcase.png"
                      alt="Trang trưng bày sản phẩm với bộ lọc thông minh"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>

                {/* Floating feature labels */}
                <div className="absolute top-6 left-6 cosmic-surface rounded-lg px-3 py-2 animate-float-soft">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">AI Search Active</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 cosmic-surface rounded-lg px-3 py-2 animate-float-soft" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">Sản phẩm:</span>
                    <span className="text-brand-catchie-blue text-xs font-bold">2,450+</span>
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

export default ProductShowcase;
