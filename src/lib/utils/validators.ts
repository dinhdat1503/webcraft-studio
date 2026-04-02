import type { ContactFormData, ValidationResult } from '@/types';

/** Validate số điện thoại Việt Nam */
export function validatePhone(phone: string): boolean {
  return /^(0|\+84)[0-9]{8,10}$/.test(phone.trim());
}

/** Validate họ tên */
export function validateName(name: string): boolean {
  return name.trim().length >= 2;
}

/** Validate toàn bộ form liên hệ */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!validateName(data.name)) {
    errors.name = 'Họ và tên phải có ít nhất 2 ký tự.';
  }
  if (!validatePhone(data.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ (VD: 0901234567).';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
}

/** Validate email (optional) */
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
