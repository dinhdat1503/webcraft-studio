import { type FC } from 'react';
import Image from 'next/image';

const detailFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    title: 'Cổng thông tin bệnh nhân',
    description: 'Bệnh nhân đăng ký tài khoản, xem lịch sử khám bệnh, đơn thuốc, kết quả xét nghiệm và hóa đơn thanh toán mọi lúc mọi nơi.',
    color: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
      </svg>
    ),
    title: 'Kê đơn thuốc điện tử',
    description: 'Bác sĩ kê đơn trực tiếp trên hệ thống, bệnh nhân nhận đơn thuốc điện tử có mã QR để mua thuốc tại nhà thuốc liên kết.',
    color: 'from-brand-catchie-blue/20 to-blue-400/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: 'Thanh toán viện phí online',
    description: 'Thanh toán trực tuyến bằng VNPAY, MoMo, ZaloPay, thẻ ngân hàng. Hỗ trợ bảo hiểm y tế và xuất hóa đơn điện tử tự động.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Dashboard quản lý phòng khám',
    description: 'Báo cáo doanh thu, thống kê bệnh nhân, hiệu suất bác sĩ, công suất phòng khám và dự báo lịch tái khám theo thời gian thực.',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Bảo mật dữ liệu y tế',
    description: 'Tuân thủ HIPAA và quy định bảo vệ dữ liệu y tế Việt Nam. Mã hóa end-to-end, phân quyền chi tiết và audit log đầy đủ.',
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
      </svg>
    ),
    title: 'Và nhiều tính năng khác...',
    description: 'Blog sức khỏe, thư viện bài tập, chỉ số BMI/sức khỏe cá nhân, kết nối thiết bị wearable và nhắc tiêm vaccine định kỳ.',
    color: 'from-slate-500/20 to-slate-400/20',
  },
];

const HealthcareDetail: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-teal-500/4 rounded-full blur-[140px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Chi Tiết
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Hệ sinh thái y tế số{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-brand-catchie-blue">
              đầy đủ & an toàn
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Từng tính năng đều được xây dựng để đảm bảo sự tin tưởng của bệnh nhân
            và hiệu quả vận hành tối đa cho đội ngũ y tế.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/10 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_healthcare.png"
                      alt="Dashboard quản lý phòng khám đầy đủ tính năng"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>
                <div className="absolute top-5 right-5 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">HIPAA Compliant</span>
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 cosmic-surface rounded-lg px-4 py-2.5 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <span className="text-white/70 text-xs">Bảo mật: <span className="text-white font-bold">Cấp quốc tế</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            {detailFeatures.map((feature, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-5 group cursor-default relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/20
                    flex items-center justify-center text-teal-400
                    group-hover:bg-teal-500/25 group-hover:border-teal-500/50 transition-all duration-300">
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

export default HealthcareDetail;
