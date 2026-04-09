import { type FC } from 'react';

const steps = [
  {
    number: '01',
    title: 'Khám phá & Phân tích',
    description: 'Nghiên cứu kỹ lưỡng về doanh nghiệp, ngành nghề, đối thủ cạnh tranh và đối tượng mục tiêu. Xây dựng brief chi tiết và kế hoạch thực hiện.',
    duration: '3–5 ngày',
    deliverables: ['Brief thiết kế', 'Phân tích cạnh tranh', 'Wireframe sơ bộ'],
  },
  {
    number: '02',
    title: 'Thiết kế UI/UX',
    description: 'Tạo mockup và prototype tương tác hoàn chỉnh. Thiết kế toàn bộ design system: màu sắc, typography, component và layout.',
    duration: '7–10 ngày',
    deliverables: ['Mockup toàn trang', 'Design System', 'Prototype tương tác'],
  },
  {
    number: '03',
    title: 'Phát triển & Lập trình',
    description: 'Chuyển đổi thiết kế thành code chất lượng cao với Next.js và TypeScript. Tích hợp CMS, API và các tính năng doanh nghiệp.',
    duration: '14–21 ngày',
    deliverables: ['Source code hoàn chỉnh', 'CMS tích hợp', 'API integration'],
  },
  {
    number: '04',
    title: 'Kiểm thử & Tối ưu',
    description: 'Kiểm thử toàn diện: cross-browser, đa thiết bị, bảo mật và hiệu năng. Tối ưu PageSpeed và Core Web Vitals đạt chuẩn Google.',
    duration: '3–5 ngày',
    deliverables: ['Test report', 'PageSpeed 95+', 'Security audit'],
  },
  {
    number: '05',
    title: 'Ra mắt & Bàn giao',
    description: 'Triển khai production với zero-downtime deployment. Đào tạo sử dụng CMS và bàn giao tài liệu kỹ thuật đầy đủ.',
    duration: '1–2 ngày',
    deliverables: ['Website live', 'Training session', 'Tài liệu kỹ thuật'],
  },
];

const CorporateProcess: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-brand-catchie-blue/4 rounded-full blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-brand-catchie-blue/4 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-15" />

      <div className="page-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Quy Trình Làm Việc
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            5 bước tạo nên{' '}
            <span className="text-brand-catchie-blue">website đẳng cấp</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Quy trình chuyên nghiệp, minh bạch và hiệu quả. Bạn sẽ được cập nhật tiến độ 
            liên tục và có cơ hội góp ý tại mỗi giai đoạn.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-catchie-blue/50 via-brand-catchie-blue/20 to-transparent" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-8 ${i % 2 === 0 ? '' : 'lg:direction-rtl'}`}
              >
                {/* Left side (even) / Right side (odd) */}
                <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'} mb-6 lg:mb-0`}>
                  <div className={`cosmic-surface surface-hover rounded-2xl p-7 group cursor-default ${i % 2 === 0 ? '' : ''}`}>
                    {/* Step number */}
                    <span className="font-heading text-5xl font-bold text-white/[0.06] leading-none block mb-3">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-3 mb-3 justify-start">
                      <span className="px-3 py-1 rounded-full bg-brand-catchie-blue/15 border border-brand-catchie-blue/30
                        text-brand-catchie-blue text-[11px] font-bold uppercase tracking-wider">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-4">{step.description}</p>
                    {/* Deliverables */}
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((d, j) => (
                        <span key={j} className="text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
                          ✓ {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full 
                  bg-brand-deep-space border-2 border-brand-catchie-blue/60 items-center justify-center z-10
                  shadow-[0_0_20px_rgba(93,173,226,0.3)]">
                  <span className="text-brand-catchie-blue font-bold text-xs">{step.number}</span>
                </div>

                {/* Right side (even) / Left side (odd) */}
                <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '30–45', unit: 'ngày', label: 'Thời gian hoàn thành trung bình' },
            { value: '100%', unit: '', label: 'Dự án bàn giao đúng hạn' },
            { value: '12', unit: 'tháng', label: 'Bảo hành sau bàn giao' },
            { value: '24/7', unit: '', label: 'Hỗ trợ kỹ thuật' },
          ].map((stat, i) => (
            <div key={i} className="cosmic-surface rounded-2xl p-6 text-center group cursor-default">
              <p className="font-heading text-3xl font-bold text-brand-catchie-blue leading-none mb-1">
                {stat.value}
                <span className="text-lg ml-1 text-brand-catchie-blue/70">{stat.unit}</span>
              </p>
              <p className="text-white/45 text-xs uppercase tracking-wider font-semibold mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateProcess;
