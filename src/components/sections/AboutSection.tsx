import { type FC } from 'react';
import Button from '@/components/ui/Button';

const highlights = [
  { icon: '🎯', title: 'Tập trung vào chuyển đổi', desc: 'Mọi thiết kế đều hướng đến mục tiêu tăng tỷ lệ chuyển đổi' },
  { icon: '⚡', title: 'Hiệu suất tối ưu', desc: 'Website tải nhanh, điểm Google PageSpeed trên 90' },
  { icon: '🛡️', title: 'Bảo mật tuyệt đối', desc: 'SSL, firewall và backup tự động bảo vệ dữ liệu của bạn' },
];

const stats = [
  { value: '500+', label: 'Dự án hoàn thành', accent: false },
  { value: '10+',  label: 'Năm kinh nghiệm',  accent: true },
  { value: '98%',  label: 'Khách hàng hài lòng', accent: true },
  { value: '24/7', label: 'Hỗ trợ kỹ thuật',  accent: false },
];

const AboutSection: FC = () => {
  return (
    <section id="about" className="section-pad bg-brand-deep-space">
      <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left: Text content */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase
            text-brand-catchie-blue mb-4 before:content-[''] before:inline-block before:w-5 before:h-0.5 before:bg-brand-catchie-blue">
            Về Chúng Tôi
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Đội ngũ chuyên gia <span className="text-brand-catchie-blue">10 năm</span> đam mê
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            CATCHIE được thành lập năm 2015 với sứ mệnh mang lại giải pháp website toàn diện,
            giúp doanh nghiệp Việt Nam phát triển mạnh mẽ trong kỷ nguyên số hóa.
          </p>
          <p className="text-slate-300 leading-relaxed mb-8">
            Chúng tôi tin rằng một website tốt không chỉ đẹp về mặt thẩm mỹ mà còn phải hoạt
            động hiệu quả, tạo ra giá trị kinh doanh thực sự cho khách hàng.
          </p>

          <div className="space-y-5 mb-10">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4 items-start cosmic-surface surface-hover rounded-xl p-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{h.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-white mb-1">{h.title}</h4>
                  <p className="text-sm text-slate-300">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button href="#contact">Liên hệ tư vấn miễn phí</Button>
        </div>

        {/* Right: Stats grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-6 md:p-8 text-center shadow-md hover:-translate-y-1.5 hover:shadow-xl
                transition-all duration-300
                ${stat.accent ? 'bg-brand-catchie-blue text-white' : 'cosmic-surface'}`}
            >
              <span className={`block font-heading text-5xl font-black mb-2 leading-none
                ${stat.accent ? 'text-white' : 'text-white'}`}>
                {stat.value}
              </span>
              <span className={`text-xs uppercase tracking-widest font-semibold
                ${stat.accent ? 'text-white/75' : 'text-gray-400'}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
