interface FooterLink {
  label: string;
  href: string;
}

interface FooterContactItem {
  icon: 'map-pin' | 'phone' | 'mail' | 'clock';
  text: string;
  href?: string;
}

interface FooterSocialItem {
  label: string;
  icon: 'facebook' | 'zalo' | 'tiktok' | 'youtube';
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerServiceLinks: FooterColumn = {
  title: 'Dịch Vụ',
  links: [
    { label: 'Thiết Kế Website', href: '/dich-vu' },
    { label: 'Chăm Sóc Website', href: '/dich-vu' },
    { label: 'Sáng Tạo Nội Dung', href: '/dich-vu' },
    { label: 'SEO & Tiếp Thị', href: '/dich-vu' },
  ],
};

export const footerPricingLinks: FooterColumn = {
  title: 'Bảng Giá',
  links: [
    { label: 'Thiết Kế Website', href: '/bang-gia/thiet-ke-website' },
    { label: 'Chăm Sóc Website', href: '/bang-gia/cham-soc-website' },
    { label: 'Sáng Tạo Nội Dung', href: '/bang-gia/sang-tao-noi-dung' },
  ],
};

export const footerCompanyLinks: FooterColumn = {
  title: 'Công Ty',
  links: [
    { label: 'Giới Thiệu', href: '/gioi-thieu' },
    { label: 'Dự Án Tiêu Biểu', href: '/du-an' },
    { label: 'Blog', href: '/blog' },
    { label: 'Liên Hệ', href: '/lien-he' },
  ],
};

export const footerContactInfo: FooterContactItem[] = [
  { icon: 'map-pin', text: '123 Nguyễn Huệ, Q.1, TP.HCM' },
  { icon: 'phone', text: '0971 69 2675', href: 'tel:0971692675' },
  { icon: 'mail', text: 'hello@catchie.vn', href: 'mailto:hello@catchie.vn' },
  { icon: 'clock', text: 'T2 – T7: 08:00 – 18:00' },
];

export const footerSocials: FooterSocialItem[] = [
  { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com/catchie.vn' },
  { label: 'Zalo', icon: 'zalo', href: 'https://zalo.me/catchie' },
  { label: 'TikTok', icon: 'tiktok', href: 'https://tiktok.com/@catchie.vn' },
  { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com/@catchie' },
];

export const footerPolicyLinks: FooterLink[] = [
  { label: 'Chính Sách Bảo Mật', href: '/chinh-sach-bao-mat' },
  { label: 'Điều Khoản Sử Dụng', href: '/dieu-khoan-su-dung' },
];
