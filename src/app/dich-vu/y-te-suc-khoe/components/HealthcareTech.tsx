import { type FC } from 'react';

const techStack = [
  { name: 'Next.js 14', emoji: '⚡' },
  { name: 'React 18', emoji: '⚛️' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'Tailwind CSS', emoji: '🎨' },
  { name: 'PostgreSQL', emoji: '🐘' },
  { name: 'WebRTC', emoji: '📹' },
  { name: 'Zalo OA', emoji: '💬' },
  { name: 'VNPAY / MoMo', emoji: '💳' },
  { name: 'AWS S3', emoji: '☁️' },
  { name: 'Redis Cache', emoji: '⚡' },
  { name: 'Figma', emoji: '🖌️' },
  { name: 'Node.js', emoji: '🟢' },
];

const HealthcareTech: FC = () => {
  return (
    <section className="section-pad bg-brand-deep-space relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/4 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
              before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
              Công Nghệ Sử Dụng
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
              Công nghệ y tế số{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-brand-catchie-blue">
                an toàn & hiệu quả
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
              Chúng tôi lựa chọn stack công nghệ đảm bảo tính ổn định cao, bảo mật dữ liệu
              tuyệt đối và khả năng mở rộng theo quy mô phòng khám.
            </p>
            <div className="space-y-4">
              {[
                'WebRTC cho telemedicine – video call bảo mật, latency thấp và ổn định',
                'PostgreSQL với row-level security đảm bảo bệnh nhân chỉ thấy dữ liệu của mình',
                'AWS S3 lưu trữ hình ảnh y tế với mã hóa AES-256 và backup tự động',
                'Zalo OA tích hợp – nhắc lịch và giao tiếp quen thuộc với bệnh nhân Việt Nam',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {techStack.map((tech, i) => (
              <div key={i} className="cosmic-surface surface-hover rounded-xl p-4 flex flex-col items-center gap-2 group cursor-default">
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

export default HealthcareTech;
