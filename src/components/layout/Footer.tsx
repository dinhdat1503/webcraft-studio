'use client';

import { type FC, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ContactService } from '@/lib/services/ContactService';
import type { ContactFormData } from '@/types';

/** Footer component với thông tin liên hệ, links và form liên hệ */
const Footer: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', company: '', phone: '', service: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const service = ContactService.getInstance();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <footer className="bg-black text-white/70" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-5">
            <span className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-white font-heading font-black text-lg">W</span>
            <span className="font-heading font-black text-xl text-white">WebCraft<span className="text-red-600">Studio</span></span>
          </Link>
          <p className="text-sm leading-relaxed text-white/55 max-w-xs">
            Công ty thiết kế website chuyên nghiệp tại Việt Nam. Chúng tôi giúp doanh nghiệp phát triển mạnh mẽ trong kỷ nguyên số.
          </p>
          <div className="mt-5 space-y-3">
            {[
              { icon: 'map-pin', text: '123 Nguyễn Huệ, Q.1, TP.HCM' },
              { icon: 'phone',   text: '090 123 4567' },
              { icon: 'mail',    text: 'hello@webcraftstudio.vn' },
            ].map(item => (
              <div key={item.icon} className="flex gap-3 items-start text-sm text-white/55">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  {item.icon === 'map-pin' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                  {item.icon === 'phone'   && <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13.6 19.79 19.79 0 011.62 5a2 2 0 011.995-2H6.5a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 10.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>}
                  {item.icon === 'mail'    && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services links */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-[0.1em] mb-5">Dịch Vụ</h4>
          <ul className="space-y-3 text-sm">
            {['Thiết Kế Website', 'Website Thương Mại Điện Tử', 'Landing Page', 'Chăm Sóc Website', 'SEO & Tiếp Thị', 'Sáng Tạo Nội Dung'].map(s => (
              <li key={s}><Link href="#services" className="text-white/50 hover:text-red-400 hover:pl-1 transition-all duration-200">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company links */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-[0.1em] mb-5">Công Ty</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'Giới Thiệu',         href: '#about' },
              { label: 'Dự Án Tiêu Biểu',    href: '#portfolio' },
              { label: 'Quy Trình Làm Việc',  href: '#process' },
              { label: 'Blog & Tin Tức',      href: '#blog' },
              { label: 'Tuyển Dụng',          href: '#' },
              { label: 'Liên Hệ',            href: '#contact' },
            ].map(link => (
              <li key={link.label}><Link href={link.href} className="text-white/50 hover:text-red-400 hover:pl-1 transition-all duration-200">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact form */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-[0.1em] mb-5">Nhận Tư Vấn Miễn Phí</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            {[
              { name: 'name',    placeholder: 'Họ và tên *', type: 'text' },
              { name: 'company', placeholder: 'Tên công ty', type: 'text' },
              { name: 'phone',   placeholder: 'Số điện thoại *', type: 'tel' },
            ].map(field => (
              <div key={field.name}>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name as keyof ContactFormData]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/[0.06] border rounded-lg text-white text-sm
                    placeholder:text-white/35 focus:outline-none focus:border-red-500 focus:bg-red-600/5
                    transition-all duration-300
                    ${errors[field.name] ? 'border-red-500' : 'border-white/10'}`}
                />
                {errors[field.name] && (
                  <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-lg
                text-white/50 text-sm focus:outline-none focus:border-red-500 transition-all duration-300"
            >
              <option value="">Dịch vụ quan tâm</option>
              <option value="design">Thiết kế website</option>
              <option value="ecom">Website TMĐT</option>
              <option value="landing">Landing page</option>
              <option value="maintenance">Chăm sóc website</option>
            </select>

            <Button
              type="submit"
              fullWidth
              disabled={status === 'loading'}
              className={status === 'success' ? '!bg-green-500 !border-green-500' : ''}
            >
              {status === 'loading' ? 'Đang gửi...' : status === 'success' ? '✓ Đã gửi thành công!' : 'Gửi yêu cầu'}
            </Button>
          </form>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/35">
          <p>© 2025 WebCraft Studio. Bảo lưu mọi quyền.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-red-400 transition-colors">Chính Sách Bảo Mật</Link>
            <Link href="#" className="hover:text-red-400 transition-colors">Điều Khoản Sử Dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
