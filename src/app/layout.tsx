import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/ui/FloatingButtons';

const dmsans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CATCHIE – Catch Your Customers Digitally',
  description:
    'CATCHIE Studio – Giải pháp website toàn diện, giúp doanh nghiệp thu hút khách hàng trên nền tảng kỹ thuật số với trải nghiệm siêu việt.',
  keywords: ['thiết kế website', 'web agency', 'catchie', 'SEO', 'Next.js'],
  openGraph: {
    title: 'CATCHIE – Catch Your Customers Digitally',
    description: 'Chinh phục không gian số với những thiết kế website độc bản từ CATCHIE.',
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${dmsans.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased selection:bg-brand-catchie-blue selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

