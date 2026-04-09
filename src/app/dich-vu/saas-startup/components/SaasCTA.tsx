import { type FC } from 'react';
import Link from 'next/link';

const SaasCTA: FC = () => {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-brand-deep-space to-brand-catchie-navy/20" />
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/6 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        <div className="cosmic-surface rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-violet-500/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-catchie-blue/8 rounded-full blur-[80px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-6
              before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue
              after:content-[''] after:inline-block after:w-6 after:h-px after:bg-brand-catchie-blue">
              Bắt Đầu Ngay
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Sẵn sàng đưa startup của bạn<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-brand-catchie-blue">
                lên quỹ đạo tăng trưởng?
              </span>
            </h2>

            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Liên hệ ngay với CATCHIE để nhận tư vấn miễn phí. Chúng tôi sẽ giúp bạn
              xây dựng landing page chuyển đổi cao và growth stack phù hợp với giai đoạn startup.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://zalo.me/0971692675" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold text-white
                  bg-violet-600 border-2 border-violet-500/80
                  hover:bg-violet-500 hover:border-violet-400 hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:-translate-y-1
                  transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Liên hệ ngay hôm nay
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold text-white
                  bg-white/5 border-2 border-white/25
                  hover:border-violet-400 hover:bg-violet-500/15 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)]
                  transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                </svg>
                Về trang chủ
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/[0.07]">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                {[
                  { value: '80+', label: 'Dự án SaaS đã triển khai' },
                  { value: '+340%', label: 'Tăng trưởng conversion trung bình' },
                  { value: '14', label: 'Ngày ra mắt MVP' },
                  { value: '5★', label: 'Đánh giá trung bình' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="font-heading text-2xl font-bold text-violet-400">{item.value}</p>
                    <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasCTA;
