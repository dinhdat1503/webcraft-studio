import type { BlogPost } from '@/types';

export const blogData: BlogPost[] = [
  {
    id: 'blog-1',
    title: '10 xu hướng thiết kế website nổi bật năm 2025',
    excerpt:
      'Khám phá những xu hướng thiết kế web đang thống trị thế giới và cách áp dụng vào dự án của bạn.',
    category: 'Thiết Kế Web',
    date: '15 Tháng 3, 2025',
    readTime: '5 phút đọc',
    slug: '10-xu-huong-thiet-ke-website-2025',
    gradientClass: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
  },
  {
    id: 'blog-2',
    title: 'Hướng dẫn SEO toàn diện 2025: Từ cơ bản đến nâng cao',
    excerpt:
      'Tất cả những gì bạn cần biết để tối ưu hóa website lên top Google một cách bền vững.',
    category: 'SEO & Marketing',
    date: '28 Tháng 2, 2025',
    readTime: '7 phút đọc',
    slug: 'huong-dan-seo-toan-dien-2025',
    gradientClass: 'from-[#0d4f3c] via-[#1b7a5a] to-[#2ecc71]',
  },
  {
    id: 'blog-3',
    title: 'Bí quyết tăng tỷ lệ chuyển đổi cho website thương mại điện tử',
    excerpt:
      'Những chiến lược đã được chứng minh giúp tăng doanh số bán hàng online lên đến 300%.',
    category: 'E-Commerce',
    date: '10 Tháng 2, 2025',
    readTime: '6 phút đọc',
    slug: 'bi-quyet-tang-ty-le-chuyen-doi-ecommerce',
    gradientClass: 'from-[#4a0e8f] via-[#7b2fbe] to-[#c45eed]',
  },
];
