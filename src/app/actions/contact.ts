'use server';

import { ContactService } from '@/lib/services/ContactService';
import { EmailService } from '@/lib/services/EmailService';
import type { ContactFormData, ApiResponse } from '@/types';

/**
 * Server Action xử lý Gửi Form Liên Hệ: Validate và Gửi qua thư viện gửi Email
 */
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const service = ContactService.getInstance();
    
    // Validate lại một lần nữa trên server để bảo mật
    const validation = service.validate(data);
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Dữ liệu không hợp lệ, vui lòng kiểm tra lại!',
      };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Server Action] Form Submitted:', service.formatForDisplay(data));
    }

    // Call service gửi thực tế
    const emailService = EmailService.getInstance();
    const emailResult = await emailService.sendContactNotification(data);

    if (!emailResult.success) {
      console.error('[Server Action] Failed to dispatch email:', emailResult.error);
      return {
        success: false,
        message: 'Lỗi cấu hình Server Gửi Mail cục bộ. Hãy liên hệ qua Zalo.',
      };
    }

    return {
      success: true,
      message: 'Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ trong tích tắc.',
    };
  } catch (error) {
    console.error('[Server Action Error]', error);
    return {
      success: false,
      message: 'Mạng nội bộ gặp sự cố. Vui lòng thử lại!',
    };
  }
}
