import { type FC } from 'react';
import Button from '@/components/ui/Button';
import StatCounter from '@/components/ui/StatCounter';
import { heroStats } from '@/data/tech.data';

/** Hero section – full viewport, dark background, large title */
const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a0f] to-[#2d0a0f]" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(225,32,40,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225,32,40,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Red glow */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-radial-red opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(225,32,40,0.2) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30
          text-red-300 px-5 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in-down">
          🏆 #1 Công ty thiết kế Website tại Việt Nam
        </div>

        {/* Title */}
        <h1 className="font-heading font-black text-6xl md:text-8xl text-white leading-[1.05] tracking-tighter mb-6">
          Công ty thiết kế
          <br />
          <span className="text-red-600 italic">Website.</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          WebCraft Studio giúp khách hàng{' '}
          <strong className="text-white">bán hàng trực tuyến hiệu quả</strong>{' '}
          và tạo ấn tượng thương hiệu tốt hơn thông qua chiến lược website ưu việt,
          được thiết kế tối ưu cho chuyển đổi và SEO.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Button href="#contact" size="lg">Bắt Đầu Dự Án</Button>
          <Button href="#portfolio" variant="outline" size="lg">Xem Portfolio</Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6
          bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
          {heroStats.map((stat, i) => (
            <div key={stat.id} className="flex items-center gap-6">
              <StatCounter target={stat.value} suffix={stat.suffix} label={stat.label} />
              {i < heroStats.length - 1 && (
                <span className="hidden sm:block w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-white/40 text-xs uppercase tracking-widest animate-bounce">
        <span>Cuộn xuống</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
