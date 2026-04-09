import { type FC } from 'react';

const techStack = [
  { name: 'Next.js 14', emoji: '⚡' },
  { name: 'React 18', emoji: '⚛️' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Tailwind CSS', emoji: '🎨' },
  { name: 'Sanity CMS', emoji: '📝' },
  { name: 'Contentful', emoji: '📦' },
  { name: 'Vercel / AWS', emoji: '☁️' },
  { name: 'Cloudflare CDN', emoji: '🌐' },
  { name: 'Google Analytics', emoji: '📊' },
  { name: 'HubSpot CRM', emoji: '🤝' },
  { name: 'Figma', emoji: '🖌️' },
  { name: 'Node.js', emoji: '🟢' },
];

const CorporateTech: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-catchie-blue/4 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left – Text */}
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
              before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
              Công Nghệ Sử Dụng
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
              Nền tảng công nghệ{' '}
              <span className="text-brand-catchie-blue">hàng đầu thế giới</span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
              Chúng tôi lựa chọn công nghệ không chỉ dựa trên xu hướng mà dựa trên tính 
              ổn định, bảo mật và khả năng mở rộng dài hạn cho doanh nghiệp.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              {[
                'Next.js 14 với App Router – hiệu năng SEO và tốc độ hàng đầu',
                'CMS headless linh hoạt – Sanity hoặc Contentful theo nhu cầu',
                'CDN toàn cầu đảm bảo tốc độ tải nhanh ở mọi khu vực',
                'Hệ thống CI/CD tự động – deploy website trong vài phút',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-brand-catchie-blue/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-catchie-blue" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Tech grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="cosmic-surface surface-hover rounded-xl p-4 flex flex-col items-center gap-2 group cursor-default"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{tech.emoji}</span>
                <span className="text-white/70 text-xs font-semibold text-center group-hover:text-white transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTech;
