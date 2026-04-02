import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    <html lang="vi" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
