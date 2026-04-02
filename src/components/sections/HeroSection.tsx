import { type FC } from 'react';
import Button from '@/components/ui/Button';
import StatCounter from '@/components/ui/StatCounter';
import { heroStats } from '@/data/tech.data';

/** Hero section – full viewport, space background, large title */
const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-36 pb-20"
    >
      {/* Background & Stars */}
      <div className="absolute inset-0 bg-grid-blue opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-twinkle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-brand-catchie-light rounded-full opacity-80 animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-blue-300 rounded-full opacity-50 animate-twinkle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full opacity-90 animate-twinkle" style={{ animationDelay: '0.5s' }} />

      {/* Blue Glow Nebula */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-catchie-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#202050]/50 blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-catchie-blue/10 border border-brand-catchie-blue/35
          text-brand-catchie-light px-5 py-2 rounded-full text-xs md:text-sm font-semibold mb-8 animate-fade-in-down shadow-[0_0_20px_rgba(93,173,226,0.2)]">
          <span className="animate-pulse">✨</span> Nền tảng Website thế hệ mới
        </div>

        {/* Title */}
        <h1 className="font-heading font-semibold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.02] tracking-tight mb-6 relative">
          Catch Your
          <br />
          Customers <span className="text-brand-catchie-blue italic font-normal drop-shadow-[0_0_22px_rgba(93,173,226,0.55)]">Digitally.</span>
        </h1>

        {/* Description */}
        <p className="text-slate-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          <strong className="text-white">CATCHIE</strong> tạo ra sức hút như <strong className="text-brand-catchie-blue">từ trường nam châm</strong>,
          kết hợp chiến lược thương hiệu, tốc độ và chuyển đổi để doanh nghiệp tăng trưởng vững trên không gian số.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 md:gap-4 justify-center flex-wrap mb-14">
          <Button href="#contact" size="lg">Khởi Hành Ngay</Button>
          <Button href="#portfolio" variant="outline" size="lg">Khám Phá Vũ Trụ</Button>
        </div>

        {/* Stats */}
        <div className="cosmic-surface rounded-3xl px-5 py-6 md:px-8 md:py-7">
          <div className="flex flex-wrap items-center justify-center gap-6">
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
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-brand-catchie-blue/60 text-xs uppercase tracking-widest animate-bounce">
        <span>Khám Phá</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
