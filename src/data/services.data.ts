import type { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'design',
    icon: 'layout',
    title: 'Thiết Kế Website',
    description:
      'Khám phá cách WebCraft Studio tạo ra những website chuyên nghiệp, giúp doanh nghiệp bán hàng trực tuyến hiệu quả và tạo ấn tượng thương hiệu tốt hơn thông qua chiến lược thiết kế ưu việt.',
    features: [
      'Thiết kế UI/UX độc quyền',
      'Responsive trên mọi thiết bị',
      'Tối ưu tốc độ tải trang',
      'Tích hợp thanh toán online',
    ],
  },
  {
    id: 'maintenance',
    icon: 'shield',
    title: 'Chăm Sóc Website',
    description:
      'Chăm sóc website là một trong những yếu tố quan trọng nhất để duy trì sự hiện diện trực tuyến hiệu quả. Một trang web không chỉ cần được thiết kế đẹp mà còn phải hoạt động ổn định và liên tục.',
    features: [
      'Bảo mật & backup hàng ngày',
      'Cập nhật nội dung định kỳ',
      'Tối ưu SEO liên tục',
      'Hỗ trợ kỹ thuật 24/7',
    ],
    isFeatured: true,
    badgeText: 'Phổ biến nhất',
  },
  {
    id: 'content',
    icon: 'edit',
    title: 'Sáng Tạo Nội Dung',
    description:
      'Xây dựng nội dung website độc đáo, hấp dẫn và giữ chân khách hàng tiềm năng. Kết hợp từ khóa SEO giúp gia tăng thứ hạng tìm kiếm từ đội ngũ chuyên gia kinh nghiệm.',
    features: [
      'Nội dung chuẩn SEO',
      'Thiết kế đồ họa & banner',
      'Sản xuất video marketing',
      'Quản lý mạng xã hội',
    ],
  },
];
