import nodemailer from 'nodemailer';
import { ContactFormData } from '@/types';

/**
 * DTO (Data Transfer Object) cho kết quả gửi mail.
 */
export interface EmailResult {
  success: boolean;
  message: string;
  error?: unknown;
}

/**
 * EmailService: Quản lý Singleton transporter của Nodemailer để tái sử dụng kết nối SMTP
 */
export class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter;

  private constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  /**
   * Gửi thông báo đến email Admin của hệ thống CATCHIE (CONTACT_EMAIL) 
   * khi có khách hàng điền Form mới.
   */
  public async sendContactNotification(data: ContactFormData): Promise<EmailResult> {
    try {
      const adminEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
      
      if (!adminEmail) {
        throw new Error('Thiếu cấu hình CONTACT_EMAIL trong biến môi trường.');
      }

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #5DADE2;">🚀 CATCHIE - Có khách hàng mới liên hệ!</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Họ và Tên</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Công ty / Tổ chức</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${data.company || 'Không có'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Số điện thoại</td>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <a href="tel:${data.phone}" style="color: #5DADE2;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Dịch vụ quan tâm</td>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <span style="background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px;">
                  ${data.service || 'Chưa xác định'}
                </span>
              </td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">
            Email tự động từ hệ thống Website CATCHIE.
          </p>
        </div>
      `;

      await this.transporter.sendMail({
        from: `"CATCHIE Notifications" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `[Lead Mới CATCHIE] - ${data.name} - ${data.service || 'Khách hàng mới'}`,
        html: htmlContent,
      });

      return { success: true, message: 'Admin notification sent successfully' };
    } catch (error) {
      console.error('[EmailService] Gửi thông báo Admin thất bại:', error);
      return { success: false, message: 'Failed to send admin notification', error };
    }
  }

  /**
   * (Tính năng phụ) Gửi email cấu hình sẵn auto-reply Cám ơn khách hàng.
   * Để trống chờ tích hợp thêm nếu cần thiết.
   */
  public async sendAutoReplyToCustomer(): Promise<EmailResult> {
    // Tùy chọn cài đặt Auto-reply nếu có field mail khách hàng
    return { success: true, message: 'Feature not fully implemented' };
  }
}
