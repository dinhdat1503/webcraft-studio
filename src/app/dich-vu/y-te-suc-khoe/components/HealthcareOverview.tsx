import { type FC } from 'react';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Đặt lịch hẹn trực tuyến',
    desc: 'Bệnh nhân đặt lịch 24/7 theo chuyên khoa, bác sĩ và khung giờ. Xác nhận tự động qua Zalo/SMS và nhắc lịch hẹn thông minh.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Hồ sơ bệnh nhân điện tử',
    desc: 'Lưu trữ và truy cập hồ sơ bệnh án, kết quả xét nghiệm, đơn thuốc và lịch sử khám chữa bệnh an toàn, bảo mật.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    ),
    title: 'Telemedicine & Tư vấn online',
    desc: 'Khám bệnh từ xa qua video call bảo mật, chat với bác sĩ, nhận đơn thuốc điện tử và tư vấn sức khỏe 24/7.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Trang hồ sơ bác sĩ',
    desc: 'Trang cá nhân đầy đủ cho từng bác sĩ: chuyên môn, bằng cấp, lịch làm việc, đánh giá từ bệnh nhân và đặt lịch trực tiếp.',
  },
];

const HealthcareOverview: FC = () => {
  return (
    <section id="overview" className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/3 rounded-full blur-[150px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tổng Quan Dịch Vụ
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Nền tảng y tế số{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-brand-catchie-blue">
              toàn diện & bảo mật
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Website y tế không chỉ là nơi giới thiệu – đây là cầu nối số giữa bác sĩ và bệnh nhân,
            giúp cải thiện trải nghiệm chăm sóc sức khỏe toàn diện.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-teal-500/20 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative cosmic-surface rounded-2xl overflow-hidden">
              <div className="aspect-[16/10]">
                <Image
                  src="/assets/portfolio/portfolio_healthcare.png"
                  alt="Website phòng khám MediCare Plus chuyên nghiệp"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="cosmic-surface rounded-xl px-4 py-3 backdrop-blur-md">
                  <p className="text-white font-heading font-bold text-sm">MediCare Plus Clinic</p>
                  <p className="text-white/50 text-xs">Hệ thống phòng khám đa khoa hàng đầu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20
                  flex items-center justify-center mb-4
                  group-hover:bg-teal-500/20 group-hover:border-teal-500/40 transition-all duration-300">
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

export default HealthcareOverview;
