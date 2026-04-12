'use client';

import { type FC, useState } from 'react';
import Button from '@/components/ui/Button';
import { ContactService } from '@/lib/services/ContactService';
import type { ContactFormData } from '@/types';

/** Form liên hệ nhanh trong footer – cần 'use client' vì dùng useState */
const FooterContactForm: FC = () => {
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

  const inputBaseClass =
    'w-full px-4 py-3 bg-white/[0.04] border rounded-xl text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-catchie-blue focus:bg-brand-catchie-blue/5 focus:ring-2 focus:ring-brand-catchie-blue/25 transition-all duration-300';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { name: 'name', placeholder: 'Họ và tên *', type: 'text' },
          { name: 'phone', placeholder: 'Số điện thoại *', type: 'tel' },
        ].map(field => (
          <div key={field.name}>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof ContactFormData]}
              onChange={handleChange}
              className={`${inputBaseClass} ${errors[field.name] ? 'border-red-400/60' : 'border-white/10'}`}
            />
            {errors[field.name] && (
              <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            name="company"
            placeholder="Tên công ty"
            value={formData.company}
            onChange={handleChange}
            className={`${inputBaseClass} border-white/10`}
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBaseClass} border-white/10`}
          >
            <option value="" className="text-gray-500 bg-white">Dịch vụ quan tâm</option>
            <option value="design" className="text-black bg-white">Thiết kế website</option>
            <option value="ecom" className="text-black bg-white">Website TMĐT</option>
            <option value="landing" className="text-black bg-white">Landing page</option>
            <option value="maintenance" className="text-black bg-white">Chăm sóc website</option>
            <option value="content" className="text-black bg-white">Sáng tạo nội dung</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        fullWidth
        disabled={status === 'loading'}
        className={status === 'success' ? '!bg-green-500 !border-green-500' : ''}
      >
        {status === 'loading'
          ? 'Đang gửi...'
          : status === 'success'
            ? '✓ Đã gửi thành công!'
            : status === 'error'
              ? 'Lỗi – Thử lại'
              : 'Gửi yêu cầu tư vấn'}
      </Button>
    </form>
  );
};

export default FooterContactForm;
