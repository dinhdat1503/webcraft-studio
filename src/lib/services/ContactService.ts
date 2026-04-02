import type { ContactFormData, ValidationResult, ApiResponse } from '@/types';

/**
 * ContactService – Singleton class xử lý toàn bộ logic liên hệ
 * Bao gồm: validate, gửi request đến API, và format dữ liệu
 */
export class ContactService {
  private static instance: ContactService;

  // Private constructor – chỉ tạo 1 instance (Singleton)
  private constructor() {}

  /** Lấy instance duy nhất của ContactService */
  public static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService();
    }
    return ContactService.instance;
  }

  /**
   * Validate dữ liệu từ form liên hệ
   * @returns ValidationResult với danh sách lỗi (nếu có)
   */
  public validate(data: ContactFormData): ValidationResult {
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Họ và tên phải có ít nhất 2 ký tự.';
    }

    if (!data.phone || !/^(0|\+84)[0-9]{8,10}$/.test(data.phone.trim())) {
      errors.phone = 'Số điện thoại không hợp lệ.';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  /**
   * Gửi dữ liệu form đến API backend
   */
  public async send(data: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await response.json();
      return result;
    } catch {
      return {
        success: false,
        message: 'Không thể kết nối đến máy chủ. Vui lòng thử lại.',
      };
    }
  }

  /**
   * Format dữ liệu form thành chuỗi dễ đọc (dùng cho email/log)
   */
  public formatForDisplay(data: ContactFormData): string {
    return [
      `Họ tên: ${data.name}`,
      `Công ty: ${data.company ?? 'N/A'}`,
      `SĐT: ${data.phone}`,
      `Dịch vụ: ${data.service ?? 'Chưa chọn'}`,
    ].join('\n');
  }
}
