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
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: Text content */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase
            text-red-600 mb-4 before:content-[''] before:inline-block before:w-5 before:h-0.5 before:bg-red-600">
            Về Chúng Tôi
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Đội ngũ chuyên gia <span className="text-red-600">10 năm</span> đam mê
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            WebCraft Studio được thành lập năm 2015 với sứ mệnh mang lại giải pháp website toàn diện,
            giúp doanh nghiệp Việt Nam phát triển mạnh mẽ trong kỷ nguyên số hóa.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Chúng tôi tin rằng một website tốt không chỉ đẹp về mặt thẩm mỹ mà còn phải hoạt
            động hiệu quả, tạo ra giá trị kinh doanh thực sự cho khách hàng.
          </p>

          <div className="space-y-5 mb-10">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0 mt-0.5">{h.icon}</span>
                <div>
                  <h4 className="font-heading font-bold text-gray-900 mb-1">{h.title}</h4>
                  <p className="text-sm text-gray-600">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button href="#contact">Liên hệ tư vấn miễn phí</Button>
        </div>

        {/* Right: Stats grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-8 text-center shadow-md hover:-translate-y-1.5 hover:shadow-xl
                transition-all duration-300
                ${stat.accent ? 'bg-red-600 text-white' : 'bg-white'}`}
            >
              <span className={`block font-heading text-5xl font-black mb-2 leading-none
                ${stat.accent ? 'text-white' : 'text-gray-900'}`}>
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
