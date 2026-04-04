import type { PortfolioItem } from '@/types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 'fashionmall',
    title: 'FashionMall Vietnam: Nâng tầm trải nghiệm mua sắm trực tuyến',
    shortTitle: 'FashionMall Vietnam',
    category: 'Thương Mại Điện Tử',
    description:
      'Platform mua sắm thời trang cao cấp, tích hợp thanh toán đa phương thức và quản lý kho hàng thông minh.',
    imageSrc: '/assets/portfolio/portfolio_ecommerce.png',
    imageAlt: 'Website Thương Mại Điện Tử FashionMall Vietnam',
    tags: ['E-Commerce', 'React', 'Node.js'],
    detailLink: '/dich-vu/thuong-mai-dien-tu',
  },
  {
    id: 'techvision',
    title: 'TechVision Corp: Chuẩn mực doanh nghiệp trong kỷ nguyên số',
    shortTitle: 'TechVision Corp',
    category: 'Doanh Nghiệp',
    description:
      'Website tập đoàn công nghệ hàng đầu, thể hiện đẳng cấp thương hiệu và thu hút đối tác quốc tế.',
    imageSrc: '/assets/portfolio/portfolio_corporate.png',
    imageAlt: 'Website Doanh Nghiệp TechVision Corp',
    tags: ['Corporate', 'Next.js', 'TypeScript'],
  },
  {
    id: 'lamaison',
    title: 'La Maison Fine Dining: Đẳng cấp ẩm thực trong không gian số',
    shortTitle: 'La Maison Fine Dining',
    category: 'Ẩm Thực & Nhà Hàng',
    description:
      'Website nhà hàng sang trọng với hệ thống đặt bàn trực tuyến và trải nghiệm ẩm thực đỉnh cao.',
    imageSrc: '/assets/portfolio/portfolio_restaurant.png',
    imageAlt: 'Website Nhà Hàng La Maison Fine Dining',
    tags: ['Restaurant', 'Booking System'],
  },
  {
    id: 'luxproperty',
    title: 'LuxProperty Vietnam: Kiến tạo giá trị bất động sản trong thời đại số',
    shortTitle: 'LuxProperty Vietnam',
    category: 'Bất Động Sản',
    description:
      'Nền tảng bất động sản cao cấp với hệ thống tìm kiếm thông minh và tour tham quan 3D trực tuyến.',
    imageSrc: '/assets/portfolio/portfolio_realestate.png',
    imageAlt: 'Website Bất Động Sản LuxProperty Vietnam',
    tags: ['Real Estate', 'Map Integration', '3D Tour'],
  },
  {
    id: 'cloudflow',
    title: 'CloudFlow SaaS: Tăng trưởng vượt bậc từ landing page tối ưu',
    shortTitle: 'CloudFlow SaaS',
    category: 'SaaS & Startup',
    description:
      'Landing page chuyển đổi cao với A/B testing tích hợp, tối ưu hóa tỷ lệ đăng ký lên đến 340%.',
    imageSrc: '/assets/portfolio/portfolio_landing.png',
    imageAlt: 'Landing Page SaaS CloudFlow',
    tags: ['SaaS', 'Landing Page', 'A/B Testing'],
  },
  {
    id: 'medicare',
    title: 'MediCare Plus Clinic: Chăm sóc sức khỏe tận tâm qua nền tảng số',
    shortTitle: 'MediCare Plus Clinic',
    category: 'Y Tế & Sức Khỏe',
    description:
      'Website phòng khám với hệ thống đặt lịch hẹn trực tuyến, hồ sơ bác sĩ và quản lý bệnh án kỹ thuật số.',
    imageSrc: '/assets/portfolio/portfolio_healthcare.png',
    imageAlt: 'Website Phòng Khám MediCare Plus',
    tags: ['Healthcare', 'Booking', 'Medical'],
  },
];
