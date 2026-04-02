import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '@/lib/services/ContactService';
import type { ContactFormData } from '@/types';

/**
 * POST /api/contact
 * Nhận dữ liệu form, validate và xử lý (có thể mở rộng để gửi email qua Nodemailer)
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

    // TODO: Tích hợp Nodemailer để gửi email thực tế
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ ... });

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
