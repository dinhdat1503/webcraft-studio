'use client';

import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useNavigation } from '@/hooks/useNavigation';
import { useScrollY } from '@/hooks/useScrollY';
import NavigationOverlay from './NavigationOverlay';

const navItems = [
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Dự án', href: '/du-an' },
  { 
    label: 'Bảng giá', 
    href: '/bang-gia',
    children: [
      { label: 'Thiết kế website', href: '/bang-gia/thiet-ke-website' },
      { label: 'Chăm sóc website', href: '/bang-gia/cham-soc-website' },
      { label: 'Sáng tạo nội dung', href: '/bang-gia/sang-tao-noi-dung' },
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Liên hệ', href: '/lien-he' },
];

/** Sticky header với logo, hamburger và navigation overlay */
const Header: FC = () => {
  const { isOpen, toggle } = useNavigation();
  const scrollY = useScrollY();
  const isScrolled = scrollY > 24;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${isScrolled
            ? 'py-3 bg-brand-deep-space/55 backdrop-blur-xl border-b border-brand-catchie-blue/25'
            : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="cosmic-surface rounded-2xl px-4 py-3 md:px-6 md:py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <span className="absolute -inset-1 rounded-xl bg-brand-catchie-blue/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative h-14 w-[152px] overflow-hidden">
              <Image
                src="/assets/catchie-fullmark-transparent.png"
                alt="CATCHIE"
                fill
                sizes="152px"
                quality={100}
                className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02] drop-shadow-[0_0_12px_rgba(93,173,226,0.45)]"
                priority
              />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-200 rounded-xl hover:bg-brand-catchie-blue/15 hover:text-white transition-all inline-flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  )}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2 bg-brand-deep-space/90 backdrop-blur-xl border border-brand-catchie-blue/25 rounded-xl shadow-[0_0_20px_rgba(93,173,226,0.15)] flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-catchie-blue/20 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/lien-he"
              className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-bold text-white bg-brand-catchie-blue hover:bg-blue-400 transition-all shadow-[0_0_22px_rgba(93,173,226,0.35)]"
            >
              Bắt đầu dự án
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggle}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            className={`relative z-[110] lg:hidden w-12 h-12 rounded-full flex flex-col items-center justify-center gap-[5px]
              transition-all duration-300 hover:bg-brand-catchie-blue/20 hover:shadow-[0_0_15px_rgba(93,173,226,0.3)]`}
          >
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 origin-center bg-white
              ${isOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}
            />
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 bg-white
              ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span className={`block w-6 h-0.5 rounded-sm transition-all duration-300 origin-center bg-white
              ${isOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}
            />
          </button>
          </div>
        </div>
      </header>

      <NavigationOverlay isOpen={isOpen} onClose={toggle} />
    </>
  );
};

export default Header;
