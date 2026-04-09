import { type FC } from 'react';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'Tìm kiếm thông minh',
    desc: 'Bộ lọc đa tiêu chí: giá, diện tích, loại BĐS, vị trí trên bản đồ, tiện ích xung quanh. Gợi ý AI dựa trên lịch sử tìm kiếm.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    title: 'Tour tham quan 3D',
    desc: 'Khách hàng tham quan bất động sản trực tuyến với công nghệ 3D 360°, Matterport integration và video walkthrough chuyên nghiệp.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Bản đồ tương tác',
    desc: 'Hiển thị vị trí BĐS trên Google Maps, tiện ích xung quanh (trường học, bệnh viện, siêu thị), khoảng cách và thời gian di chuyển.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Công cụ tính toán tài chính',
    desc: 'Tính lãi suất vay mua nhà, so sánh gói vay ngân hàng, ước tính chi phí hàng tháng và lên kế hoạch tài chính mua BĐS.',
  },
];

const RealEstateOverview: FC = () => {
  return (
    <section id="overview" className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/3 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tổng Quan Dịch Vụ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Nền tảng bất động sản{' '}
            <span className="text-brand-catchie-blue">thế hệ mới</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Website bất động sản không chỉ là nơi đăng tin – đây là nền tảng kết nối 
            người mua và chủ đầu tư với trải nghiệm tìm kiếm vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/15 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative cosmic-surface rounded-2xl overflow-hidden">
              <div className="aspect-[16/10]">
                <Image
                  src="/assets/portfolio/portfolio_realestate.png"
                  alt="Giao diện website bất động sản LuxProperty"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="cosmic-surface rounded-xl px-4 py-3 backdrop-blur-md">
                  <p className="text-white font-heading font-bold text-sm">LuxProperty Vietnam</p>
                  <p className="text-white/50 text-xs">Nền tảng bất động sản cao cấp hàng đầu</p>
                </div>
              </div>
            </div>
          </div>

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

export default RealEstateOverview;
