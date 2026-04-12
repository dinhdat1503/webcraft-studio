import type { PricingPlan } from '@/types';

export const pricingData: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '3.500.000 – 5.000.000',
    priceNote: 'Thanh toán một lần',
    ctaText: 'Bắt đầu ngay',
    features: [
      { text: 'Thiết kế 4-6 trang', included: true },
      { text: 'Responsive Mobile', included: true },
      { text: 'Tên miền 1 năm', included: true },
      { text: 'Hosting 1 năm (2-4GB)', included: true },
      { text: 'SSL Certificate', included: true },
      { text: 'SEO cơ bản', included: true },
      { text: 'E-commerce', included: false },
      { text: 'Tích hợp thanh toán', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '7.000.000 – 15.000.000',
    priceNote: 'Thanh toán một lần',
    ctaText: 'Bắt đầu ngay',
    isFeatured: true,
    badgeText: 'Phổ biến nhất',
    features: [
      { text: 'Thiết kế 10-15 trang', included: true },
      { text: 'Responsive Mobile', included: true },
      { text: 'Tên miền 1 năm', included: true },
      { text: 'Hosting NVME 1 năm (15-50GB)', included: true },
      { text: 'RAM 4-6GB', included: true },
      { text: 'SSL Certificate', included: true },
      { text: 'SEO chuyên sâu', included: true },
      { text: 'Tích hợp thanh toán', included: true },
      { text: 'Admin Panel', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Liên hệ',
    priceNote: 'Báo giá tùy nhu cầu',
    ctaText: 'Tư vấn miễn phí',
    features: [
      { text: 'Trang không giới hạn', included: true },
      { text: 'Thiết kế UI/UX độc quyền', included: true },
      { text: 'Tích hợp hệ thống ERP/CRM', included: true },
      { text: 'Server dedicated', included: true },
      { text: 'Bảo mật enterprise', included: true },
      { text: 'Đa ngôn ngữ', included: true },
      { text: 'App Mobile iOS/Android', included: true },
      { text: 'Hỗ trợ ưu tiên 24/7', included: true },
    ],
  },
];

export const maintenancePricing: PricingPlan[] = [
  {
    id: 'cham-soc-dau-muc',
    name: 'Chăm sóc theo yêu cầu',
    price: '100.000 – 500.000',
    priceNote: '/lỗi (Tùy độ khó)',
    ctaText: 'Liên hệ sửa lỗi',
    features: [
      { text: 'Sửa lỗi giao diện nhỏ lẻ', included: true },
      { text: 'Khắc phục các lỗi tính năng', included: true },
      { text: 'Xử lý lỗi responsive', included: true },
      { text: 'Thanh toán đơn giản theo từng lỗi', included: true },
    ]
  },
  {
    id: 'cham-soc-toan-dien',
    name: 'Chăm sóc toàn diện',
    price: '1.000.000 – 3.000.000',
    priceNote: 'Cập nhật + vá lỗi phần mềm',
    ctaText: 'Đăng ký ngay',
    isFeatured: true,
    badgeText: 'Toàn diện',
    features: [
      { text: 'Kiểm tra bảo mật hệ thống', included: true },
      { text: 'Cập nhật phần mềm mới nhất', included: true },
      { text: 'Vá mọi lỗi phát sinh trong tháng', included: true },
      { text: 'Backup dữ liệu thường xuyên', included: true },
    ]
  },
  {
    id: 'nang-cap',
    name: 'Nâng cấp website',
    price: 'Liên hệ',
    priceNote: 'Giá thương lượng',
    ctaText: 'Nhận báo giá',
    features: [
      { text: 'Lập trình thêm tính năng mới', included: true },
      { text: 'Thiết kế thêm các trang phụ', included: true },
      { text: 'Tối ưu chuyên sâu tốc độ (Pagespeed)', included: true },
      { text: 'Nâng cấp hệ thống Backend', included: true },
    ]
  }
];

export const contentPricing: PricingPlan[] = [
  {
    id: 'goi-y-thiet-ke',
    name: 'Gợi ý chỉnh sửa',
    price: '500.000 – 1.000.000',
    priceNote: 'Theo ngành hàng',
    ctaText: 'Tư vấn ngay',
    features: [
      { text: 'Phân tích giao diện hiện tại', included: true },
      { text: 'Gợi ý cấu trúc layout chuẩn UX', included: true },
      { text: 'Tư vấn màu sắc & font chữ', included: true },
      { text: 'Hỗ trợ lên ý tưởng nội dung', included: true },
    ]
  },
  {
    id: 'thiet-ke-lai',
    name: 'Thiết kế lại (Redesign)',
    price: '1.500.000 – 3.000.000',
    priceNote: 'Chuẩn nhận diện thương hiệu',
    ctaText: 'Bắt đầu ngay',
    isFeatured: true,
    badgeText: 'Phổ biến',
    features: [
      { text: 'Thiết kế lại toàn bộ giao diện', included: true },
      { text: 'Tối ưu UI/UX chuẩn ngành hàng', included: true },
      { text: 'Bố cục nội dung khoa học', included: true },
      { text: 'Đồng bộ bộ nhận diện thương hiệu', included: true },
    ]
  }
];
