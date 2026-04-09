import { type FC } from 'react';
import Image from 'next/image';

const showcaseFeatures = [
  {
    icon: '🏥',
    title: 'Trang tổng quan phòng khám',
    description: 'Giới thiệu cơ sở vật chất, trang thiết bị hiện đại, đội ngũ bác sĩ chuyên khoa và thành tích nổi bật. Gallery ảnh và video tour 3D.',
    highlight: 'Clinic Profile',
  },
  {
    icon: '📅',
    title: 'Hệ thống lịch hẹn thông minh',
    description: 'Lịch làm việc real-time của từng bác sĩ, chọn khung giờ linh hoạt, xác nhận và nhắc lịch tự động. Hỗ trợ đặt lịch hàng loạt.',
    highlight: 'Smart Scheduling',
  },
  {
    icon: '🔬',
    title: 'Kết quả xét nghiệm online',
    description: 'Bệnh nhân tra cứu kết quả xét nghiệm, hình ảnh chẩn đoán và đơn thuốc trực tuyến. Thông báo khi có kết quả mới.',
    highlight: 'Lab Results',
  },
  {
    icon: '💊',
    title: 'Nhắc nhở uống thuốc & tái khám',
    description: 'Hệ thống tự động gửi nhắc uống thuốc đúng giờ, thông báo lịch tái khám và theo dõi sức khỏe định kỳ qua Zalo/SMS/Email.',
    highlight: 'Smart Reminders',
  },
];

const HealthcareShowcase: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-catchie-blue/4 rounded-full blur-[100px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Tính Năng Nổi Bật
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Trải nghiệm y tế số{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-brand-catchie-blue">
              tận tâm & tiên tiến
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Mỗi tính năng được thiết kế lấy bệnh nhân làm trung tâm – đơn giản, tin cậy
            và tiện lợi ở mọi lúc mọi nơi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            {showcaseFeatures.map((feature, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-2xl p-6 group cursor-default relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400/60 via-teal-400/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/20
                    flex items-center justify-center text-2xl
                    group-hover:bg-teal-500/20 group-hover:border-teal-500/40
                    group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-heading text-white font-semibold text-base">{feature.title}</h3>
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-400 text-[10px] font-bold uppercase tracking-wider">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 relative">
            <div className="sticky top-28">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/15 via-transparent to-brand-catchie-blue/10 rounded-3xl blur-xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative cosmic-surface rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10]">
                    <Image
                      src="/assets/portfolio/portfolio_healthcare.png"
                      alt="Website y tế với tính năng đặt lịch và telemedicine"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-space/50 via-transparent to-transparent" />
                </div>
                <div className="absolute top-6 left-6 cosmic-surface rounded-lg px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-white text-xs font-bold">3,200+ lịch hẹn / tháng</span>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 cosmic-surface rounded-lg px-3 py-2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-xs">Bệnh nhân hài lòng:</span>
                    <span className="text-teal-400 text-xs font-bold">97%</span>
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

export default HealthcareShowcase;
