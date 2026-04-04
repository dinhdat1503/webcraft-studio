import { type FC } from 'react';
import Image from 'next/image';

const detailFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Hình ảnh bố cục thông minh',
    description: 'Hiển thị hình ảnh sản phẩm theo bố cục gallery thông minh, dễ nhìn. Hỗ trợ zoom, 360° view và nhiều góc chụp sản phẩm.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
      </svg>
    ),
    title: 'Phân loại sản phẩm tự động',
    description: 'Bộ lọc tích chọn theo màu sắc, kích thước, mẫu mã. Khách hàng dễ dàng tìm đúng biến thể sản phẩm mong muốn.',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
      </svg>
    ),
    title: 'Chi tiết giá & voucher ưu đãi',
    description: 'Hiển thị giá gốc, giá khuyến mãi, phần trăm giảm giá và voucher ưu đãi kèm theo. Countdown timer cho flash sale.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Mô tả sản phẩm chi tiết',
    description: 'Trình bày thông tin sản phẩm rõ ràng với rich text editor, hỗ trợ bảng thông số kỹ thuật, video review và tab thông tin.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/>
      </svg>
    ),
    title: 'Nút thêm vào giỏ hàng',
    description: 'CTA nổi bật với hiệu ứng micro-animation, thông báo thêm giỏ hàng thành công và gợi ý sản phẩm liên quan.',
    color: 'from-brand-catchie-blue/20 to-blue-400/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    ),
    title: 'Và nhiều tính năng khác...',
    description: 'Đánh giá sản phẩm, so sánh sản phẩm, wishlist, chia sẻ mạng xã hội, thông báo hàng về lại và tích hợp chatbot hỗ trợ.',
    color: 'from-slate-500/20 to-slate-400/20',
  },
];

const ProductDetail: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand-catchie-blue/4 rounded-full blur-[140px]" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Product Detail Page
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Trang Sản Phẩm{' '}
            <span className="text-brand-catchie-blue">Chi Tiết</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Trang sản phẩm được thiết kế tối ưu để tăng trải nghiệm mua sắm 
            và thúc đẩy quyết định mua hàng của khách hàng.
          </p>
        </div>

        {/* Image + features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Image Left */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-catchie-blue/10 via-transparent to-purple-500/10 rounded-3xl blur-xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/product_detail.png"
                      alt="Trang sản phẩm chi tiết với bộ lọc và giỏ hàng"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>

                {/* Floating badges */}
                <div className="absolute top-5 right-5 cosmic-surface rounded-lg px-3 py-2 animate-float-soft">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-xs font-bold">-25%</span>
                    <span className="text-white/50 text-xs">Voucher Applied</span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 cosmic-surface rounded-lg px-4 py-2.5 animate-float-soft" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      <div className="w-4 h-4 rounded-full bg-red-400 border border-white/20" />
                      <div className="w-4 h-4 rounded-full bg-blue-400 border border-white/20" />
                      <div className="w-4 h-4 rounded-full bg-green-400 border border-white/20" />
                    </div>
                    <span className="text-white/70 text-xs">3 màu sắc</span>
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
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20 
                    flex items-center justify-center text-brand-catchie-blue
                    group-hover:bg-brand-catchie-blue/25 group-hover:border-brand-catchie-blue/50 
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

export default ProductDetail;
