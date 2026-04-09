import { type FC } from 'react';
import Link from 'next/link';

const RealEstateCTA: FC = () => {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-brand-deep-space to-brand-catchie-navy/20" />
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/6 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        <div className="cosmic-surface rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-catchie-blue/8 rounded-full blur-[80px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-6
              before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue
              after:content-[''] after:inline-block after:w-6 after:h-px after:bg-brand-catchie-blue">
              Bắt Đầu Ngay
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Sẵn sàng xây dựng{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-catchie-blue">
                nền tảng BĐS số
              </span>
              <br />
              của riêng bạn?
            </h2>

            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Liên hệ ngay với CATCHIE để nhận tư vấn miễn phí và bắt đầu xây dựng
              website bất động sản đẳng cấp, tăng giao dịch vượt bậc.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold text-white
                  bg-emerald-500 border-2 border-emerald-400/80
                  hover:bg-emerald-400 hover:border-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] hover:-translate-y-1
                  transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.6 19.79 19.79 0 011.62 5a2 2 0 011.995-2H6.5a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Nhận tư vấn miễn phí
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-heading font-bold text-white
                  bg-white/5 border-2 border-white/25
                  hover:border-emerald-400 hover:bg-emerald-500/15 hover:shadow-[0_0_18px_rgba(52,211,153,0.25)]
                  transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
                </svg>
                Về trang chủ
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/[0.07]">
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                {[
                  { value: '50+', label: 'Dự án BĐS đã triển khai' },
                  { value: '98%', label: 'Khách hàng hài lòng' },
                  { value: '5★', label: 'Đánh giá trung bình' },
                  { value: '12', label: 'Tháng bảo hành' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="font-heading text-2xl font-bold text-emerald-400">{item.value}</p>
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

export default RealEstateCTA;
