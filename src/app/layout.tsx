import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';

const dmsans = DM_Sans({
  subsets: ['latin'], // DM Sans and DM Serif Display have limited vietnamese subset support natively in next/font, falling back to latin. We might need to ensure characters render correctly.
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400'], // DM Serif Display comes in 400 and 400 italic
});

export const metadata: Metadata = {
  title: 'WebCraft Studio – Thiết Kế Website Chuyên Nghiệp tại Việt Nam',
  description:
    'WebCraft Studio – Công ty thiết kế website chuyên nghiệp tại Việt Nam. Chúng tôi giúp doanh nghiệp bán hàng trực tuyến hiệu quả và tạo ấn tượng thương hiệu mạnh mẽ.',
  keywords: ['thiết kế website', 'web design', 'website chuyên nghiệp', 'SEO', 'Next.js'],
  openGraph: {
    title: 'WebCraft Studio – Thiết Kế Website Chuyên Nghiệp',
    description: 'Giúp doanh nghiệp phát triển mạnh mẽ trong kỷ nguyên số với website chuyên nghiệp.',
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${dmsans.variable} ${dmSerifDisplay.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

