'use client';

import { type FC, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ContactService } from '@/lib/services/ContactService';
import type { ContactFormData } from '@/types';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.6 19.79 19.79 0 011.62 5a2 2 0 011.995-2H6.5a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Điện thoại',
    value: '0971 69 2675',
    href: 'tel:0971692675',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'hello@catchie.vn',
    href: 'mailto:hello@catchie.vn',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Địa chỉ',
    value: 'TP. Hồ Chí Minh, Việt Nam',
    href: '#',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.49 10.272v-.45h1.347v6.479h-1.347v-.45a2.55 2.55 0 01-1.685.63c-1.685 0-2.93-1.328-2.93-2.88 0-1.55 1.245-2.88 2.93-2.88.63 0 1.23.225 1.685.551zm-1.573 4.877c1.01 0 1.685-.787 1.685-1.776 0-.99-.675-1.777-1.685-1.777-1.01 0-1.685.788-1.685 1.777 0 .99.675 1.776 1.685 1.776z"/>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
    label: 'Zalo',
    value: 'Chat qua Zalo',
    href: 'https://zalo.me/0971692675',
  },
];

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', company: '', phone: '', service: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const service = ContactService.getInstance();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = service.validate(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setStatus('loading');
    const result = await service.send(formData);
    setStatus(result.success ? 'success' : 'error');
    if (result.success) setFormData({ name: '', company: '', phone: '', service: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-space via-brand-catchie-navy/30 to-brand-deep-space" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-catchie-blue/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-catchie-blue/4 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-blue bg-grid opacity-20" />

        <div className="page-container relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-brand-catchie-blue transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-brand-catchie-blue font-medium">Liên hệ & Tư vấn</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand-catchie-blue mb-5
              before:content-[''] before:inline-block before:w-6 before:h-px before:bg-brand-catchie-blue">
              Liên Hệ & Tư Vấn
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Bắt đầu dự án{' '}
              <span className="text-brand-catchie-blue">cùng CATCHIE</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia. Chúng tôi sẽ
              giúp bạn hiện thực hóa ý tưởng thành website chuyên nghiệp và hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="section-pad bg-brand-deep-space relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-catchie-blue/3 rounded-full blur-[150px]" />

        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Info */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
                Thông tin liên hệ
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Hãy liên hệ với chúng tôi qua bất kỳ kênh nào bên dưới. Đội ngũ CATCHIE luôn sẵn sàng
                hỗ trợ bạn từ tư vấn giải pháp đến triển khai dự án.
              </p>

              <div className="space-y-5 mb-10">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 cosmic-surface surface-hover rounded-2xl p-5 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-catchie-blue/10 border border-brand-catchie-blue/20
                      flex items-center justify-center text-brand-catchie-blue
                      group-hover:bg-brand-catchie-blue/20 group-hover:border-brand-catchie-blue/40 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-0.5">{item.label}</p>
                      <p className="text-white font-heading font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Zalo CTA */}
              <a
                href="https://zalo.me/0971692675"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-white
                  bg-blue-600 border-2 border-blue-500/80
                  hover:bg-blue-500 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1
                  transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.49 10.272v-.45h1.347v6.479h-1.347v-.45a2.55 2.55 0 01-1.685.63c-1.685 0-2.93-1.328-2.93-2.88 0-1.55 1.245-2.88 2.93-2.88.63 0 1.23.225 1.685.551zm-1.573 4.877c1.01 0 1.685-.787 1.685-1.776 0-.99-.675-1.777-1.685-1.777-1.01 0-1.685.788-1.685 1.777 0 .99.675 1.776 1.685 1.776z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
                Chat Zalo ngay
              </a>
            </div>

            {/* Right: Form */}
            <div>
              <div className="cosmic-surface rounded-3xl p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Gửi yêu cầu tư vấn</h3>
                <p className="text-white/50 text-sm mb-8">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 2 giờ.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name', placeholder: 'Họ và tên *', type: 'text' },
                    { name: 'company', placeholder: 'Tên công ty', type: 'text' },
                    { name: 'phone', placeholder: 'Số điện thoại *', type: 'tel' },
                  ].map(field => (
                    <div key={field.name}>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof ContactFormData]}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-brand-catchie-navy/50 border rounded-xl text-white text-sm
                          placeholder:text-white/35 focus:outline-none focus:border-brand-catchie-blue focus:bg-brand-catchie-blue/5 focus:ring-2 focus:ring-brand-catchie-blue/30
                          transition-all duration-300
                          ${errors[field.name] ? 'border-red-500' : 'border-white/10'}`}
                      />
                      {errors[field.name] && (
                        <p className="text-red-400 text-xs mt-1.5">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-brand-catchie-navy/50 border border-white/10 rounded-xl
                      text-white/50 text-sm focus:outline-none focus:border-brand-catchie-blue focus:ring-2 focus:ring-brand-catchie-blue/30 transition-all duration-300"
                  >
                    <option value="">Dịch vụ quan tâm</option>
                    <option value="design">Thiết kế website</option>
                    <option value="ecom">Website TMĐT</option>
                    <option value="landing">Landing page</option>
                    <option value="maintenance">Chăm sóc website</option>
                    <option value="saas">SaaS & Startup</option>
                    <option value="healthcare">Y tế & Sức khỏe</option>
                    <option value="realestate">Bất động sản</option>
                    <option value="restaurant">Ẩm thực & Nhà hàng</option>
                  </select>

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={status === 'loading'}
                    className={status === 'success' ? '!bg-green-500 !border-green-500' : ''}
                  >
                    {status === 'loading' ? 'Đang gửi...' : status === 'success' ? '✓ Đã gửi thành công!' : 'Gửi yêu cầu tư vấn'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
