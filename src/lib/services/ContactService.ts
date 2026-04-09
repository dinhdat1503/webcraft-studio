import type { ContactFormData, ValidationResult, ApiResponse } from '@/types';
import { submitContactForm } from '@/app/actions/contact';

/**
 * ContactService – Singleton class xử lý toàn bộ logic liên hệ
 * Bao gồm: validate, gửi request qua Server Action, và format dữ liệu
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
   * Gửi dữ liệu form qua Server Actions
   */
  public async send(data: ContactFormData): Promise<ApiResponse> {
    try {
      const result = await submitContactForm(data);
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
