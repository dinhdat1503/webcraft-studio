import type { TechItem, ProcessStep, StatItem } from '@/types';

export const techData: TechItem[] = [
  { id: 'react',   name: 'React',            emoji: '⚛️' },
  { id: 'vue',     name: 'Vue.js',           emoji: '💚' },
  { id: 'next',    name: 'Next.js',          emoji: '▲' },
  { id: 'node',    name: 'Node.js',          emoji: '🟩' },
  { id: 'wp',      name: 'WordPress',        emoji: '🔵' },
  { id: 'figma',   name: 'Figma',            emoji: '🎨' },
  { id: 'aws',     name: 'AWS',              emoji: '☁️' },
  { id: 'ga',      name: 'Google Analytics', emoji: '📊' },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Tư Vấn & Phân Tích',
    description:
      'Chúng tôi lắng nghe nhu cầu, phân tích thị trường và đề xuất giải pháp tối ưu nhất cho doanh nghiệp của bạn.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Thiết Kế & Lập Trình',
    description:
      'Đội ngũ designer và developer chuyên nghiệp biến ý tưởng thành sản phẩm thực tế với giao diện đẹp và hiệu suất cao.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Kiểm Thử & Tối Ưu',
    description:
      'Kiểm thử toàn diện trên mọi thiết bị, tối ưu tốc độ, SEO và bảo mật trước khi ra mắt chính thức.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Ra Mắt & Hỗ Trợ',
    description:
      'Triển khai website và đào tạo quản trị viên. Hỗ trợ kỹ thuật liên tục để website hoạt động hoàn hảo.',
  },
];

export const heroStats: StatItem[] = [
  { id: 'projects', value: 500, suffix: '+', label: 'Dự Án Hoàn Thành' },
  { id: 'clients',  value: 200, suffix: '+', label: 'Khách Hàng Tin Tưởng' },
  { id: 'years',    value: 10,  suffix: '+', label: 'Năm Kinh Nghiệm' },
];
