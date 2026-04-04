import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/lib/services/ContactService';
import { EmailService } from '@/lib/services/EmailService';
import type { ContactFormData } from '@/types';

/**
 * POST /api/contact
 * Nhận dữ liệu form, validate và gửi mail qua Nodemailer.
 */
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Sử dụng ContactService để validate
    const service = ContactService.getInstance();
    const validation = service.validate(body);

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: 'Dữ liệu không hợp lệ.', errors: validation.errors },
        { status: 400 },
      );
    }

    // Log dữ liệu (development)
    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact Form]', service.formatForDisplay(body));
    }

    // Gửi email thực tế qua Nodemailer (EmailService)
    const emailService = EmailService.getInstance();
    const emailResult = await emailService.sendContactNotification(body);

    if (!emailResult.success) {
      console.error('Không thể gửi mail:', emailResult.error);
      return NextResponse.json(
        { success: false, message: 'Lỗi cấu hình Email Server. Vui lòng kiểm tra lại.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: 'Yêu cầu đã được gửi thành công! Chúng tôi sẽ liên hệ trong vòng 24h.' },
      { status: 200 },
    );
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { success: false, message: 'Lỗi máy chủ. Vui lòng thử lại sau.' },
      { status: 500 },
    );
  }
}
