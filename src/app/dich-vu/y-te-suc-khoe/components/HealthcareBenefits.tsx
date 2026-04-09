import { type FC } from 'react';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Giảm tải cho lễ tân & admin',
    description: 'Đặt lịch và xác nhận tự động giảm 70% cuộc gọi điện thoại. Nhân viên tập trung vào chăm sóc bệnh nhân thay vì xử lý thủ công.',
    stat: '-70%',
    statLabel: 'Admin Workload',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Tăng lượng bệnh nhân mới',
    description: 'SEO y tế địa phương, Google Maps và hệ thống đánh giá minh bạch giúp tăng lượng bệnh nhân tìm đến phòng khám trung bình 2x.',
    stat: '2x',
    statLabel: 'New Patients',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Xây dựng uy tín thương hiệu y tế',
    description: 'Website chuyên nghiệp, thông tin bác sĩ minh bạch và hệ thống đánh giá xác thực tạo niềm tin vững chắc với bệnh nhân.',
    stat: '97%',
    statLabel: 'Patient Trust',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Giảm tỷ lệ vắng mặt (No-show)',
    description: 'Hệ thống nhắc lịch đa kênh (Zalo, SMS, Email) trước 24h và 2h giúp giảm tỷ lệ bệnh nhân vắng mặt từ 30% xuống còn 8%.',
    stat: '-22%',
    statLabel: 'No-show Rate',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Tăng doanh thu phòng khám',
    description: 'Tối ưu công suất phòng khám, tăng tỷ lệ tái khám và upsell dịch vụ khám tổng quát, gói sức khỏe gia đình.',
    stat: '+45%',
    statLabel: 'Revenue Growth',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Bảo mật & tuân thủ pháp lý',
    description: 'Tuân thủ đầy đủ các quy định bảo vệ dữ liệu y tế Việt Nam. Mã hóa dữ liệu bệnh nhân, kiểm toán truy cập và backup hàng ngày.',
    stat: '100%',
    statLabel: 'Compliance',
  },
];

const HealthcareBenefits: FC = () => {
  return (
    <section className="section-pad bg-brand-catchie-navy/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="page-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
            before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
            Lợi Ích Vượt Trội
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white mb-5">
            Tại sao chọn{' '}
            <span className="text-brand-catchie-blue">CATCHIE?</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300">
            Chúng tôi hiểu đặc thù ngành y tế – vừa cần tính chuyên nghiệp cao vừa
            đảm bảo sự tin tưởng và an toàn tuyệt đối với bệnh nhân.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <div key={i} className="cosmic-surface surface-hover rounded-2xl p-7 group cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/8 rounded-full blur-[40px]
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 border border-teal-500/20
                    flex items-center justify-center text-teal-400
                    group-hover:bg-teal-500/20 group-hover:border-teal-500/40
                    group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-teal-400 leading-none">{benefit.stat}</p>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider font-bold mt-0.5">{benefit.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareBenefits;
